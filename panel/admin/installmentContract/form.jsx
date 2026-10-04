import {
    DateTime,
    DialogForm,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='installmentPlan'
        property='installmentPlan'
        required
    />
    <Text
        placeholder='customer'
        property='customer'
        required
    />
    <Numeric
        placeholder='principalAmount'
        property='principalAmount'
        required
    />
    <Numeric
        placeholder='totalAmount'
        property='totalAmount'
        required
    />
    <Text
        placeholder='currency'
        property='currency'
        required
    />
    <DateTime
        placeholder='startDate'
        property='startDate'
        required
    />
</>

export default <DialogForm inputs={inputs} />
