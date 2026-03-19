export type TipoEquipo = "piletas" | "bombas" | "cisternas";

export interface WizardData {
  tipo: TipoEquipo | "";
  servicio: string;
  empresa: string;
  contacto: string;
  fecha: string;
  // Piletas
  tipoPileta: string;
  cantidadPiletas: string;
  capacidad: string;
  espesorChapas: string;
  entradasPulgadas: string;
  cantidadEntradas: string;
  tipoEntrada: string;
  salidasPulgadas: string;
  cantidadSalidas: string;
  escalera: string;
  techo: string;
  tipoValvula: string;
  puntoRadar: boolean;
  arrestallama: boolean;
  bandejaEcologica: boolean;
  motoresHP: string;
  tipoFluido: string;
  interconexion: string;
  zaranda: string;
  golpeador: string;
  espumigeno: string;
  especCaracteristicas: string;
  // Bombas
  cantidadBombas: string;
  fluidoBomba: string;
  potenciaHP: string;
  entradaBomba: string;
  salidaBomba: string;
  bandejaEcologicaBomba: boolean;
  // Cisternas
  tipoFluidoCisterna: string;
  capacidadCisterna: string;
  salidasCisterna: string;
  motoresCisterna: string;
  bandejaEcologicaCisterna: boolean;
  // Shared
  requiereTransporte: string;
  observaciones: string;
  certificaciones: string;
}

const today = new Date();
export const fechaHoy = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;

export const initialWizardData: WizardData = {
  tipo: "",
  servicio: "alquiler",
  empresa: "",
  contacto: "",
  fecha: fechaHoy,
  tipoPileta: "",
  cantidadPiletas: "",
  capacidad: "",
  espesorChapas: "",
  entradasPulgadas: "",
  cantidadEntradas: "",
  tipoEntrada: "",
  salidasPulgadas: "",
  cantidadSalidas: "",
  escalera: "",
  techo: "",
  tipoValvula: "",
  puntoRadar: false,
  arrestallama: false,
  bandejaEcologica: false,
  motoresHP: "",
  tipoFluido: "",
  interconexion: "",
  zaranda: "",
  golpeador: "",
  espumigeno: "",
  especCaracteristicas: "",
  cantidadBombas: "",
  fluidoBomba: "",
  potenciaHP: "",
  entradaBomba: "",
  salidaBomba: "",
  bandejaEcologicaBomba: false,
  tipoFluidoCisterna: "",
  capacidadCisterna: "",
  salidasCisterna: "",
  motoresCisterna: "",
  bandejaEcologicaCisterna: false,
  requiereTransporte: "",
  observaciones: "",
  certificaciones: "",
};

function row(label: string, value: string | boolean | undefined): string {
  if (value === undefined || value === "" || value === false || value === "No aplica") return "";
  if (value === true) return `${label}: Si\n`;
  return `${label}: ${value}\n`;
}

export function buildWhatsAppUrl(data: WizardData): string {
  const PHONE = "5492993323446";
  let msg = "SOLICITUD ROLCKA SRL\n";
  msg += "---------------------\n";
  msg += row("Empresa", data.empresa);
  msg += row("Contacto", data.contacto);
  msg += row("Fecha", data.fecha);
  msg += "---------------------\n";

  if (data.tipo === "piletas") {
    msg += row("Equipo", `Pileta de ${data.tipoPileta} (${data.servicio})`);
    msg += row("Cantidad", data.cantidadPiletas);
    msg += row("Capacidad", data.capacidad ? `${data.capacidad} m3` : "");
    msg += row("Espesor chapas", data.espesorChapas);
    msg += row("Entradas", data.entradasPulgadas ? `${data.entradasPulgadas} x ${data.cantidadEntradas || "-"} ud` : "");
    msg += row("Tipo de entrada", data.tipoEntrada);
    msg += row("Salidas", data.salidasPulgadas ? `${data.salidasPulgadas} x ${data.cantidadSalidas || "-"} ud` : "");
    msg += row("Escalera", data.escalera);
    msg += row("Techo", data.techo);
    msg += row("Valvulas", data.tipoValvula);
    const accs = [
      data.puntoRadar && "Punto radar",
      data.arrestallama && "Arrestallama",
      data.bandejaEcologica && "Bandeja ecologica",
    ].filter(Boolean).join(", ");
    if (accs) msg += `Accesorios: ${accs}\n`;
    if (data.tipoPileta === "Agitacion") {
      msg += row("Motores", data.motoresHP);
    }
    if (data.tipoPileta === "Acumulacion") {
      msg += row("Tipo de fluido", data.tipoFluido);
      msg += row("Interconexion", data.interconexion);
    }
    if (data.tipoPileta === "Ensayo") {
      const items = [
        data.zaranda === "Si" && "Zaranda",
        data.golpeador === "Si" && "Golpeador",
        data.espumigeno === "Si" && "Espumigeno",
      ].filter(Boolean).join(", ");
      if (items) msg += `Accesorios de ensayo: ${items}\n`;
      msg += row("Caracteristicas", data.especCaracteristicas);
    }
  } else if (data.tipo === "bombas") {
    msg += row("Equipo", `Bomba Centrifuga (${data.servicio})`);
    msg += row("Cantidad", data.cantidadBombas);
    msg += row("Tipo de fluido", data.fluidoBomba);
    msg += row("Potencia", data.potenciaHP ? `${data.potenciaHP} HP` : "");
    msg += row("Entrada", data.entradaBomba ? `${data.entradaBomba}"` : "");
    msg += row("Salida", data.salidaBomba ? `${data.salidaBomba}"` : "");
    msg += row("Bandeja ecologica", data.bandejaEcologicaBomba);
  } else if (data.tipo === "cisternas") {
    msg += row("Equipo", `Cisterna (${data.servicio})`);
    msg += row("Tipo de fluido", data.tipoFluidoCisterna);
    msg += row("Capacidad", data.capacidadCisterna ? `${data.capacidadCisterna} m3` : "");
    msg += row("Salidas", data.salidasCisterna);
    msg += row("Motores", data.motoresCisterna);
    msg += row("Bandeja ecologica", data.bandejaEcologicaCisterna);
  }

  msg += "---------------------\n";
  msg += row("Transporte", data.requiereTransporte);
  msg += row("Observaciones", data.observaciones);
  msg += row("Certificaciones adicionales", data.certificaciones);

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}
