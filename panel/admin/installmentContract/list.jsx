import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>installmentsNumber</th>
    <th>installmentsCustomer</th>
    <th>installmentsPrincipalAmount</th>
    <th>installmentsTotalAmount</th>
    <th>installmentsStartDate</th>
    <th>installmentsState</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.customer?.title}</td>
    <td>{item.principalAmount}</td>
    <td>{item.totalAmount}</td>
    <DateTime value={item.startDate} />
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
