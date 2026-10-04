import {
    DateTime,
    DialogForm,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
    <Text
        installmentPlan
        required
    />
    <Text
        customer
        required
    />
    <Numeric
        principalAmount
        required
    />
    <Numeric
        required
        totalAmount
    />
    <Text
        currency
        required
    />
    <DateTime
        required
        startDate
    />
</>

export default <DialogForm inputs={inputs} />
