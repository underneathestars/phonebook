export default function DisplayEntries({ entries }) {

    return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
       {entries && entries.map(entry => (
         <tr key={entry.number}>
           <td>{entry.firstName}</td>
           <td>{entry.lastName}</td>
           <td>{entry.number}</td>
         </tr>
       ))}
      </tbody>
    </table>
    )};