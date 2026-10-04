import {
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
        required
    />
    <Numeric
        installmentsCount
        placeholder='count'
        required
    />
    <Select
        installmentFrequency
        options={[
            'weekly',
            'monthly',
            'quarterly',
            'custom',
        ]}
        required
    />
    <Numeric downPaymentPercentage />
    <Numeric interestRate />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
