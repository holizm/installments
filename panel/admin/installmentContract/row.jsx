import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <td>{item.customer?.title}</td>
    <td>{item.principalAmount}</td>
    <td>{item.totalAmount}</td>
    <DateTime value={item.startDate} />
    <td>{item.state?.title}</td>
</>
