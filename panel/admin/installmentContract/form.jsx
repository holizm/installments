import {
    DateTime,
    DialogForm,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='installmentsNumber'
        property='number'
        required
    />
    <Text
        placeholder='installmentsPlan'
        property='installmentPlan'
        required
    />
    <Text
        placeholder='installmentsCustomer'
        property='customer'
        required
    />
    <Numeric
        placeholder='installmentsPrincipalAmount'
        property='principalAmount'
        required
    />
    <Numeric
        placeholder='installmentsTotalAmount'
        property='totalAmount'
        required
    />
    <Text
        placeholder='installmentsCurrency'
        property='currency'
        required
    />
    <DateTime
        placeholder='installmentsStartDate'
        property='startDate'
        required
    />
</>

export default <DialogForm inputs={inputs} />
