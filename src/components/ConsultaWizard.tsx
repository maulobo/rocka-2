import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  type WizardData,
  type TipoEquipo,
  initialWizardData,
  buildWhatsAppUrl,
} from "../lib/wizardWhatsapp";
import {
  SelectBtn,
  BtnGroup,
  CheckToggle,
  Field,
  TextInput,
  TextArea,
} from "./wizard/WizardUI";

// ── Types ─────────────────────────────────────────────────────────────────────
type SetFn = <K extends keyof WizardData>(k: K, v: WizardData[K]) => void;

interface StepConfig {
  id: string;
  label: string;
}

function getStepConfigs(tipo: TipoEquipo | ""): StepConfig[] {
  const base: StepConfig[] = [
    { id: "tipo", label: "Tipo de equipo" },
    { id: "datos", label: "Tus datos" },
  ];
  if (tipo === "piletas") {
    return [
      ...base,
      { id: "specs", label: "Especificaciones" },
      { id: "config", label: "Configuracion" },
      { id: "finales", label: "Detalles finales" },
    ];
  }
  if (tipo === "bombas" || tipo === "cisternas") {
    return [...base, { id: "specs", label: "Especificaciones" }];
  }
  return [{ id: "tipo", label: "Tipo de equipo" }];
}

// ── Validation ────────────────────────────────────────────────────────────────
function validateStep(step: number, data: WizardData): string[] {
  const errs: string[] = [];
  if (step === 0) {
    if (!data.tipo) errs.push("Selecciona el tipo de equipo");
    if (!data.servicio) errs.push("Selecciona si es alquiler o compra");
    if (data.tipo === "piletas" && !data.tipoPileta) errs.push("Selecciona el tipo de pileta");
    if (data.tipo === "piletas" && !data.cantidadPiletas) errs.push("Indica la cantidad");
    if (data.tipo === "bombas" && !data.cantidadBombas) errs.push("Indica la cantidad");
  }
  if (step === 1) {
    if (!data.empresa) errs.push("Nombre de la empresa requerido");
    if (!data.contacto) errs.push("Nombre del contacto requerido");
    if (!data.fecha) errs.push("Fecha requerida");
  }
  if (step === 2 && data.tipo === "piletas") {
    if (!data.capacidad) errs.push("Selecciona la capacidad");
    if (!data.espesorChapas) errs.push("Selecciona el espesor de chapas");
    if (!data.entradasPulgadas) errs.push("Selecciona el tamaño de entradas");
    if (!data.salidasPulgadas) errs.push("Selecciona el tamaño de salidas");
  }
  if (step === 2 && data.tipo === "bombas") {
    if (!data.fluidoBomba) errs.push("Selecciona el tipo de fluido");
    if (!data.potenciaHP) errs.push("Indica la potencia");
    if (!data.entradaBomba) errs.push("Indica la entrada");
    if (!data.salidaBomba) errs.push("Indica la salida");
    if (!data.requiereTransporte) errs.push("Indica si requiere transporte");
  }
  if (step === 2 && data.tipo === "cisternas") {
    if (!data.tipoFluidoCisterna) errs.push("Selecciona el tipo de fluido");
    if (!data.capacidadCisterna) errs.push("Indica la capacidad");
    if (!data.salidasCisterna) errs.push("Selecciona el tipo de salida");
    if (!data.motoresCisterna) errs.push("Selecciona la potencia del motor");
    if (!data.requiereTransporte) errs.push("Indica si requiere transporte");
  }
  if (step === 3 && data.tipo === "piletas") {
    if (!data.tipoEntrada) errs.push("Selecciona el tipo de entrada");
    if (!data.escalera) errs.push("Selecciona el tipo de escalera");
    if (!data.techo) errs.push("Selecciona el tipo de techo");
    if (!data.tipoValvula) errs.push("Selecciona el tipo de valvula");
  }
  if (step === 4 && data.tipo === "piletas") {
    if (!data.requiereTransporte) errs.push("Indica si requiere transporte");
    if (data.tipoPileta === "Agitacion" && !data.motoresHP) errs.push("Selecciona la potencia del motor");
    if (data.tipoPileta === "Acumulacion" && !data.tipoFluido) errs.push("Selecciona el tipo de fluido");
    if (data.tipoPileta === "Acumulacion" && !data.interconexion) errs.push("Indica si requiere interconexion");
  }
  return errs;
}

// ── Step components ───────────────────────────────────────────────────────────

function StepTipoEquipo({ data, set }: { data: WizardData; set: SetFn }) {
  const tipos: { value: TipoEquipo; label: string; sub: string }[] = [
    { value: "piletas", label: "Piletas", sub: "Acumulacion · Agitacion · Ensayo" },
    { value: "bombas", label: "Bombas Centrifugas", sub: "Agua · Lodo" },
    { value: "cisternas", label: "Cisternas", sub: "Agua · Gasoil" },
  ];

  return (
    <div className="flex flex-col gap-8">
      <Field label="Tipo de equipo" required>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
          {tipos.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => set("tipo", t.value)}
              className={`border p-5 text-left transition-all ${
                data.tipo === t.value
                  ? "border-[#9D031A] bg-[#0A0D12]"
                  : "border-[#1C2028] bg-[#0A0D12] hover:border-[#9D031A]/40"
              }`}
            >
              <div
                className={`text-[11px] font-black uppercase tracking-[0.15em] mb-1 ${
                  data.tipo === t.value ? "text-[#9D031A]" : "text-[#C0C8D4]"
                }`}
              >
                {t.label}
              </div>
              <div className="text-[9px] text-[#C0C8D4] uppercase tracking-wide">{t.sub}</div>
            </button>
          ))}
        </div>
      </Field>

      <Field label="Servicio requerido" required>
        <div className="flex gap-2">
          {["alquiler", "compra"].map((s) => (
            <SelectBtn
              key={s}
              label={s}
              active={data.servicio === s}
              onClick={() => set("servicio", s)}
            />
          ))}
        </div>
      </Field>

      {data.tipo === "piletas" && (
        <>
          <Field label="Tipo de pileta" required>
            <BtnGroup
              options={["Acumulacion", "Agitacion", "Ensayo"]}
              value={data.tipoPileta}
              onChange={(v) => set("tipoPileta", v)}
            />
          </Field>
          <Field label="Cantidad de equipos" required>
            <TextInput
              value={data.cantidadPiletas}
              onChange={(v) => set("cantidadPiletas", v)}
              placeholder="Ej: 2"
            />
          </Field>
        </>
      )}

      {data.tipo === "bombas" && (
        <Field label="Cantidad de equipos" required>
          <TextInput
            value={data.cantidadBombas}
            onChange={(v) => set("cantidadBombas", v)}
            placeholder="Ej: 1"
          />
        </Field>
      )}
    </div>
  );
}

function StepDatos({ data, set }: { data: WizardData; set: SetFn }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Nombre de la empresa" required>
        <TextInput
          value={data.empresa}
          onChange={(v) => set("empresa", v)}
          placeholder="Ej: YPF S.A."
        />
      </Field>
      <Field label="Nombre del contacto" required>
        <TextInput
          value={data.contacto}
          onChange={(v) => set("contacto", v)}
          placeholder="Nombre y apellido"
        />
      </Field>
      <Field label="Fecha de solicitud" required>
        <TextInput
          value={data.fecha}
          onChange={(v) => set("fecha", v)}
          placeholder="DD/MM/AAAA"
        />
      </Field>
    </div>
  );
}

function StepPiletaEspecs({ data, set }: { data: WizardData; set: SetFn }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Capacidad (m3)" required>
        <BtnGroup
          options={["40", "50", "60", "70", "80"]}
          value={data.capacidad}
          onChange={(v) => set("capacidad", v)}
        />
      </Field>
      <Field label="Espesor de chapas" required>
        <BtnGroup
          options={['1/4"', '3/16"']}
          value={data.espesorChapas}
          onChange={(v) => set("espesorChapas", v)}
        />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Entradas (pulgadas)" required>
          <BtnGroup
            options={['3"', '4"', '6"', '8"']}
            value={data.entradasPulgadas}
            onChange={(v) => set("entradasPulgadas", v)}
          />
        </Field>
        <Field label="Cantidad de entradas">
          <TextInput
            value={data.cantidadEntradas}
            onChange={(v) => set("cantidadEntradas", v)}
            placeholder="Ej: 2"
          />
        </Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="Salidas (pulgadas)" required>
          <BtnGroup
            options={['3"', '4"', '6"']}
            value={data.salidasPulgadas}
            onChange={(v) => set("salidasPulgadas", v)}
          />
        </Field>
        <Field label="Cantidad de salidas">
          <TextInput
            value={data.cantidadSalidas}
            onChange={(v) => set("cantidadSalidas", v)}
            placeholder="Ej: 1"
          />
        </Field>
      </div>
    </div>
  );
}

function StepPiletaConfig({ data, set }: { data: WizardData; set: SetFn }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Tipo de entrada" required>
        <BtnGroup
          options={["Cuello de cisne", "Gas Buster"]}
          value={data.tipoEntrada}
          onChange={(v) => set("tipoEntrada", v)}
        />
      </Field>
      <Field label="Escalera" required>
        <BtnGroup
          options={["45°", "90°", "Indistinto"]}
          value={data.escalera}
          onChange={(v) => set("escalera", v)}
        />
      </Field>
      <Field label="Techo" required>
        <BtnGroup
          options={["Cerrado", "Abierto"]}
          value={data.techo}
          onChange={(v) => set("techo", v)}
        />
      </Field>
      <Field label="Tipo de valvula" required>
        <BtnGroup
          options={["Wafer", "Esferica", "Fly"]}
          value={data.tipoValvula}
          onChange={(v) => set("tipoValvula", v)}
        />
      </Field>
      <Field label="Accesorios">
        <div className="flex flex-wrap gap-2">
          <CheckToggle
            label="Punto radar"
            checked={data.puntoRadar}
            onChange={(v) => set("puntoRadar", v)}
          />
          <CheckToggle
            label="Arrestallama"
            checked={data.arrestallama}
            onChange={(v) => set("arrestallama", v)}
          />
          <CheckToggle
            label="Bandeja ecologica"
            checked={data.bandejaEcologica}
            onChange={(v) => set("bandejaEcologica", v)}
          />
        </div>
      </Field>
    </div>
  );
}

function StepPiletaFinales({ data, set }: { data: WizardData; set: SetFn }) {
  const ensayoConSi =
    data.zaranda === "Si" || data.golpeador === "Si" || data.espumigeno === "Si";

  return (
    <div className="flex flex-col gap-6">
      {data.tipoPileta === "Agitacion" && (
        <Field label="Motores (HP)" required>
          <BtnGroup
            options={["7.5 HP", "10 HP", "No aplica"]}
            value={data.motoresHP}
            onChange={(v) => set("motoresHP", v)}
          />
        </Field>
      )}

      {data.tipoPileta === "Acumulacion" && (
        <>
          <Field label="Tipo de fluido" required>
            <BtnGroup
              options={["Lodo", "Agua", "No aplica"]}
              value={data.tipoFluido}
              onChange={(v) => set("tipoFluido", v)}
            />
          </Field>
          <Field label="Interconexion" required>
            <BtnGroup
              options={["Si", "No", "No aplica"]}
              value={data.interconexion}
              onChange={(v) => set("interconexion", v)}
            />
          </Field>
        </>
      )}

      {data.tipoPileta === "Ensayo" && (
        <>
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#C0C8D4] mb-3">
              Accesorios de ensayo
            </div>
            <div className="flex flex-col gap-4">
              {(
                [
                  { field: "zaranda" as const, label: "Zaranda" },
                  { field: "golpeador" as const, label: "Golpeador" },
                  { field: "espumigeno" as const, label: "Espumigeno" },
                ] as { field: keyof WizardData; label: string }[]
              ).map(({ field, label }) => (
                <div key={field as string}>
                  <div className="text-[8px] text-[#C0C8D4] uppercase tracking-[0.15em] mb-1.5">
                    {label}
                  </div>
                  <BtnGroup
                    options={["Si", "No", "No aplica"]}
                    value={data[field] as string}
                    onChange={(v) => set(field, v as WizardData[typeof field])}
                  />
                </div>
              ))}
            </div>
          </div>
          {ensayoConSi && (
            <Field label="Caracteristicas / capacidad / dimensiones">
              <TextArea
                value={data.especCaracteristicas}
                onChange={(v) => set("especCaracteristicas", v)}
                placeholder="Indicar caracteristicas si aplica, sino N/A"
              />
            </Field>
          )}
        </>
      )}

      <Field label="Requiere transporte" required>
        <BtnGroup
          options={["Si", "No"]}
          value={data.requiereTransporte}
          onChange={(v) => set("requiereTransporte", v)}
        />
      </Field>
      <Field label="Observaciones / requisitos adicionales">
        <TextArea
          value={data.observaciones}
          onChange={(v) => set("observaciones", v)}
          placeholder="Cualquier otro requisito o detalle"
        />
      </Field>
      <Field label="Certificaciones adicionales requeridas">
        <TextArea
          value={data.certificaciones}
          onChange={(v) => set("certificaciones", v)}
          placeholder="Ademas del certificado de estanqueidad, indicar otras si corresponde"
        />
      </Field>
    </div>
  );
}

function StepBombaEspecs({ data, set }: { data: WizardData; set: SetFn }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Tipo de fluido" required>
        <BtnGroup
          options={["Lodo", "Agua"]}
          value={data.fluidoBomba}
          onChange={(v) => set("fluidoBomba", v)}
        />
      </Field>
      <Field label="Potencia requerida (HP)" required>
        <TextInput
          value={data.potenciaHP}
          onChange={(v) => set("potenciaHP", v)}
          placeholder="Ej: 15"
        />
      </Field>
      <div className="grid grid-cols-2 gap-6">
        <Field label="Entrada (pulgadas)" required>
          <TextInput
            value={data.entradaBomba}
            onChange={(v) => set("entradaBomba", v)}
            placeholder="Ej: 4"
          />
        </Field>
        <Field label="Salida (pulgadas)" required>
          <TextInput
            value={data.salidaBomba}
            onChange={(v) => set("salidaBomba", v)}
            placeholder="Ej: 3"
          />
        </Field>
      </div>
      <Field label="Bandeja ecologica">
        <div className="flex gap-2">
          <CheckToggle
            label="Incluir bandeja ecologica"
            checked={data.bandejaEcologicaBomba}
            onChange={(v) => set("bandejaEcologicaBomba", v)}
          />
        </div>
      </Field>
      <Field label="Requiere transporte" required>
        <BtnGroup
          options={["Si", "No"]}
          value={data.requiereTransporte}
          onChange={(v) => set("requiereTransporte", v)}
        />
      </Field>
      <Field label="Observaciones">
        <TextArea
          value={data.observaciones}
          onChange={(v) => set("observaciones", v)}
          placeholder="Otros requisitos o detalles"
        />
      </Field>
    </div>
  );
}

function StepCisternaEspecs({ data, set }: { data: WizardData; set: SetFn }) {
  return (
    <div className="flex flex-col gap-6">
      <Field label="Tipo de fluido" required>
        <BtnGroup
          options={["Agua", "Gasoil"]}
          value={data.tipoFluidoCisterna}
          onChange={(v) => set("tipoFluidoCisterna", v)}
        />
      </Field>
      <Field label="Capacidad (metros cubicos)" required>
        <TextInput
          value={data.capacidadCisterna}
          onChange={(v) => set("capacidadCisterna", v)}
          placeholder="Ej: 10"
        />
      </Field>
      <Field label="Salidas" required>
        <BtnGroup
          options={["Surtidor", '1"']}
          value={data.salidasCisterna}
          onChange={(v) => set("salidasCisterna", v)}
        />
      </Field>
      <Field label="Motores (HP)" required>
        <BtnGroup
          options={["0.5 HP", "1 HP"]}
          value={data.motoresCisterna}
          onChange={(v) => set("motoresCisterna", v)}
        />
      </Field>
      <Field label="Bandeja ecologica">
        <div className="flex gap-2">
          <CheckToggle
            label="Incluir bandeja ecologica"
            checked={data.bandejaEcologicaCisterna}
            onChange={(v) => set("bandejaEcologicaCisterna", v)}
          />
        </div>
      </Field>
      <Field label="Requiere transporte" required>
        <BtnGroup
          options={["Si", "No"]}
          value={data.requiereTransporte}
          onChange={(v) => set("requiereTransporte", v)}
        />
      </Field>
      <Field label="Certificaciones adicionales">
        <TextArea
          value={data.certificaciones}
          onChange={(v) => set("certificaciones", v)}
          placeholder="Ademas del certificado de estanqueidad, indicar otras si corresponde"
        />
      </Field>
      <Field label="Observaciones">
        <TextArea
          value={data.observaciones}
          onChange={(v) => set("observaciones", v)}
          placeholder="Otros requisitos o detalles"
        />
      </Field>
    </div>
  );
}

// ── Step renderer ─────────────────────────────────────────────────────────────
function renderStep(
  stepIndex: number,
  data: WizardData,
  set: SetFn
): JSX.Element {
  if (stepIndex === 0) return <StepTipoEquipo data={data} set={set} />;
  if (stepIndex === 1) return <StepDatos data={data} set={set} />;
  if (stepIndex === 2) {
    if (data.tipo === "piletas") return <StepPiletaEspecs data={data} set={set} />;
    if (data.tipo === "bombas") return <StepBombaEspecs data={data} set={set} />;
    if (data.tipo === "cisternas") return <StepCisternaEspecs data={data} set={set} />;
  }
  if (stepIndex === 3 && data.tipo === "piletas") return <StepPiletaConfig data={data} set={set} />;
  if (stepIndex === 4 && data.tipo === "piletas") return <StepPiletaFinales data={data} set={set} />;
  return <div />;
}

// ── Main wizard ───────────────────────────────────────────────────────────────
export default function ConsultaWizard() {
  const [searchParams] = useSearchParams();
  const initialTipo = (searchParams.get("tipo") as TipoEquipo) || "";
  const [data, setData] = useState<WizardData>({
    ...initialWizardData,
    tipo: initialTipo,
  });
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const set: SetFn = (k, v) => {
    setData((prev) => {
      // Reset tipo-specific fields when tipo changes
      if (k === "tipo" && v !== prev.tipo) {
        return { ...initialWizardData, tipo: v as TipoEquipo, servicio: prev.servicio };
      }
      return { ...prev, [k]: v };
    });
  };

  const steps = getStepConfigs(data.tipo);
  const totalSteps = steps.length;
  const isLastStep = step === totalSteps - 1;

  function next() {
    const errs = validateStep(step, data);
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    setErrors([]);
    if (isLastStep) {
      window.open(buildWhatsAppUrl(data), "_blank");
      setSubmitted(true);
    } else {
      setStep((s) => s + 1);
    }
  }

  function prev() {
    setErrors([]);
    setStep((s) => Math.max(0, s - 1));
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-8">
        <div className="text-center max-w-md">
          <div className="text-[9px] text-[#9D031A] font-bold uppercase tracking-[0.2em] mb-4">
            SOLICITUD ENVIADA
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#E8ECF0] mb-4">
            Te contactamos a la brevedad
          </h2>
          <p className="text-sm text-[#8A95A5] mb-8">
            Tu solicitud fue generada. Si el mensaje de WhatsApp no se abrió
            automáticamente, revisá que no esté bloqueado por el navegador.
          </p>
          <button
            type="button"
            onClick={() => {
              setData({ ...initialWizardData });
              setStep(0);
              setSubmitted(false);
            }}
            className="border border-[#1C2028] text-[#555] px-6 py-3 uppercase tracking-[0.15em] text-xs font-black hover:border-[#9D031A] hover:text-[#9D031A] transition-all"
          >
            Nueva solicitud
          </button>
        </div>
      </div>
    );
  }

  const currentStepConfig = steps[step];
  const progressPct = Math.round(((step + 1) / totalSteps) * 100);

  return (
    <div className="flex min-h-[calc(100vh-5rem)]">
      {/* ── Sidebar ── */}
      <aside className="hidden md:flex flex-col w-56 bg-[#090B0F] border-r border-[#1C2028] p-8 shrink-0 sticky top-20 h-[calc(100vh-5rem)]">
        <div className="text-[8px] text-[#9D031A] font-bold uppercase tracking-[0.2em] mb-6">
          SOLICITUD DE EQUIPO
        </div>
        <nav className="flex flex-col gap-3 flex-1">
          {steps.map((s, i) => {
            const isDone = i < step;
            const isActive = i === step;
            const isLocked = i > step;
            return (
              <button
                key={s.id + i}
                type="button"
                disabled={isLocked}
                onClick={() => {
                  if (isDone) {
                    setErrors([]);
                    setStep(i);
                  }
                }}
                className="flex items-center gap-3 text-left disabled:cursor-default"
              >
                <div
                  className={`w-6 h-6 flex items-center justify-center text-[9px] font-black shrink-0 transition-all ${
                    isDone
                      ? "bg-[#0F215A] text-white"
                      : isActive
                        ? "bg-[#9D031A] text-white"
                        : "bg-[#1C2028] text-[#555]"
                  }`}
                >
                  {isDone ? "✓" : i + 1}
                </div>
                <span
                  className={`text-[9px] font-bold uppercase tracking-[0.12em] transition-colors ${
                    isActive ? "text-[#E8ECF0]" : isDone ? "text-[#8A95A5]" : "text-[#333]"
                  }`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </nav>
        <div className="mt-auto">
          <div className="h-[2px] bg-[#1C2028] mb-2">
            <div
              className="h-full bg-[#9D031A] transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="text-[8px] text-[#8A95A5] font-bold">
            PASO {step + 1} DE {totalSteps}
          </div>
        </div>
      </aside>

      {/* ── Content ── */}
      <div className="flex-1 flex justify-center">
      <div className="w-full px-6 md:px-12 lg:px-16 py-12 max-w-2xl">
        {/* Mobile progress */}
        <div className="flex items-center gap-3 mb-8 md:hidden">
          <div className="flex-1 h-[2px] bg-[#1C2028]">
            <div
              className="h-full bg-[#9D031A] transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="text-[9px] text-[#8A95A5] font-bold shrink-0">
            {step + 1} / {totalSteps}
          </span>
        </div>

        {/* Step header */}
        <div className="mb-8">
          <div className="text-[9px] text-[#9D031A] font-bold uppercase tracking-[0.2em] mb-2">
            PASO {step + 1} — {currentStepConfig?.label.toUpperCase()}
          </div>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#E8ECF0]">
            {step === 0 && "¿Qué necesitas?"}
            {step === 1 && "Datos de contacto"}
            {step === 2 && data.tipo === "piletas" && "Especificaciones tecnicas"}
            {step === 2 && data.tipo === "bombas" && "Especificaciones tecnicas"}
            {step === 2 && data.tipo === "cisternas" && "Especificaciones tecnicas"}
            {step === 3 && data.tipo === "piletas" && "Configuracion del equipo"}
            {step === 4 && data.tipo === "piletas" && "Detalles finales"}
          </h1>
        </div>

        {/* Step fields */}
        <div className="mb-10">{renderStep(step, data, set)}</div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="mb-6 border border-[#9D031A]/40 bg-[#9D031A]/5 px-4 py-3">
            {errors.map((e) => (
              <p key={e} className="text-[11px] text-[#9D031A] font-semibold mb-0.5">
                — {e}
              </p>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-[#1C2028] pt-6">
          <button
            type="button"
            onClick={prev}
            disabled={step === 0}
            className="border border-[#1C2028] text-[#555] px-6 py-3 uppercase tracking-[0.15em] text-xs font-black hover:border-[#9D031A] hover:text-[#9D031A] transition-all disabled:opacity-0 disabled:pointer-events-none"
          >
            Anterior
          </button>

          {isLastStep ? (
            <button
              type="button"
              onClick={next}
              className="bg-[#25D366] text-white px-8 py-3.5 uppercase tracking-[0.15em] text-xs font-black hover:bg-[#1ebe5d] transition-all"
            >
              Enviar por WhatsApp
            </button>
          ) : (
            <button
              type="button"
              onClick={next}
              className="bg-[#9D031A] text-white px-8 py-3.5 uppercase tracking-[0.15em] text-xs font-black hover:bg-[#B3041F] transition-all"
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
