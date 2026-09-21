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
        placeholder='installmentsCode'
        property='code'
        required
    />
    <Numeric
        placeholder='installmentsCount'
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
        placeholder='installmentsInstallmentFrequency'
        property='installmentFrequency'
        required
    />
    <Numeric
        placeholder='coreDownPaymentPercentage'
        property='downPaymentPercentage'
    />
    <Numeric
        placeholder='coreInterestRate'
        property='interestRate'
    />
    <LongText
        placeholder='installmentsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
