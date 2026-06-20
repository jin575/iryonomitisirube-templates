type HoursTableProps = {
  hours: {
    heading: string;
    days: readonly string[];
    rows: readonly {
      label: string;
      note: string;
      marks: readonly string[];
    }[];
  };
};

export function HoursTable({ hours }: HoursTableProps) {
  return (
    <table className="hours">
      <thead>
        <tr>
          <th>{hours.heading}</th>
          {hours.days.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {hours.rows.map((row) => (
          <tr key={row.label}>
            <td>
              {row.label}
              <br />
              <span className="wf-label">({row.note})</span>
            </td>
            {row.marks.map((mark, index) => (
              <td key={`${row.label}-${hours.days[index]}`}>{mark}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
