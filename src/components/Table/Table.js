import React from 'react'

const Table = ({ title, headings, rows }) => {
  return (
    <section className="font-mono">
      <h1 className="font-bold text-xl lg:text-2xl">{title}</h1>
      <table className="border table-auto">
        <thead className="border">
          <tr className="border">
            {headings.map((item, index) => (
              <th className="border p-2" key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length <= 0 ? (
            <tr className="border">
              <td className="border p-2 text-center" colSpan={headings.length}>
                No records Found!
              </td>
            </tr>
          ) : (
            <>
              {rows.map((item, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.firstName}</td>
                  <td className="border p-2">{item.lastName}</td>
                  <td className="border p-2">{item.email}</td>
                  <td className="border p-2">{item.phone}</td>
                  <td className="border p-2">{item.nationality}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </section>
  )
}

export default Table
