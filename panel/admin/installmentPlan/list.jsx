import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>installmentsInstallmentPlan</th>
    <th>installmentsCode</th>
    <th>installmentsCount</th>
    <th>installmentsInstallmentFrequency</th>
    <th>coreInterestRate</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.installmentsCount}</td>
    <td>{item.installmentFrequency}</td>
    <td>{item.interestRate}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
