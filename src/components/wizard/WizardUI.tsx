import type { ReactNode } from "react";

// ── SelectBtn ─────────────────────────────────────────────────────────────────
export function SelectBtn({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] border transition-all ${
        active
          ? "border-[#9D031A] bg-[#0A0D12] text-[#9D031A]"
          : "border-[#1C2028] bg-[#0A0D12] text-[#C0C8D4] hover:border-[#9D031A]/40 hover:text-[#9D031A]/60"
      }`}
    >
      {label}
    </button>
  );
}

// ── BtnGroup ─────────────────────────────────────────────────────────────────
export function BtnGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <SelectBtn
          key={opt}
          label={opt}
          active={value === opt}
          onClick={() => onChange(value === opt ? "" : opt)}
        />
      ))}
    </div>
  );
}

// ── CheckToggle ───────────────────────────────────────────────────────────────
export function CheckToggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] border transition-all flex items-center gap-2 ${
        checked
          ? "border-[#9D031A] bg-[#0A0D12] text-[#9D031A]"
          : "border-[#1C2028] bg-[#0A0D12] text-[#C0C8D4] hover:border-[#9D031A]/40 hover:text-[#9D031A]/60"
      }`}
    >
      <span
        className="w-3 h-3 border flex items-center justify-center text-[7px] flex-shrink-0"
        style={{ borderColor: checked ? "#9D031A" : "#252B35" }}
      >
        {checked && "X"}
      </span>
      {label}
    </button>
  );
}

// ── Field ─────────────────────────────────────────────────────────────────────
export function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="block text-[9px] font-bold uppercase tracking-[0.18em] text-[#C0C8D4] mb-2">
        {label}
        {required && <span className="text-[#9D031A] ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

// ── TextInput ─────────────────────────────────────────────────────────────────
export function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-[#1C2028] border border-[#252B35] px-4 py-3 text-sm placeholder-[#555] focus:outline-none focus:border-[#9D031A] text-[#E8ECF0] transition-all"
    />
  );
}

// ── TextArea ─────────────────────────────────────────────────────────────────
export function TextArea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <textarea
      rows={3}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-[#1C2028] border border-[#252B35] px-4 py-3 text-sm placeholder-[#555] focus:outline-none focus:border-[#9D031A] text-[#E8ECF0] transition-all resize-none"
    />
  );
}
