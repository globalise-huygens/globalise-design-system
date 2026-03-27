interface Prop {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: Prop[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="border border-white/10 px-4 py-2 text-left font-sans font-semibold text-white/90">
              Prop
            </th>
            <th className="border border-white/10 px-4 py-2 text-left font-sans font-semibold text-white/90">
              Type
            </th>
            <th className="border border-white/10 px-4 py-2 text-left font-sans font-semibold text-white/90">
              Default
            </th>
            <th className="border border-white/10 px-4 py-2 text-left font-sans font-semibold text-white/90">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className="border border-white/10 px-4 py-2 font-mono text-brand-turquoise">
                {prop.name}
                {prop.required && (
                  <span className="text-brand-vermilion ml-0.5">*</span>
                )}
              </td>
              <td className="border border-white/10 px-4 py-2 font-mono text-white/70">
                {prop.type}
              </td>
              <td className="border border-white/10 px-4 py-2 font-mono text-white/50">
                {prop.default ?? "-"}
              </td>
              <td className="border border-white/10 px-4 py-2 font-sans text-white/70">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
