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
        placeholder='code'
        property='code'
        required
    />
    <Numeric
        placeholder='count'
        property='installmentsCount'
        required
    />
    <Select
        options={[
            'weekly',
            'monthly',
            'quarterly',
            'custom',
        ]}
        placeholder='installmentFrequency'
        property='installmentFrequency'
        required
    />
    <Numeric
        placeholder='downPaymentPercentage'
        property='downPaymentPercentage'
    />
    <Numeric
        placeholder='interestRate'
        property='interestRate'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
