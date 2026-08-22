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
        placeholder='installmentsFrequency'
        property='installmentFrequency'
        required
    />
    <Numeric
        placeholder='installmentsDownPaymentPercentage'
        property='downPaymentPercentage'
    />
    <Numeric
        placeholder='installmentsInterestRate'
        property='interestRate'
    />
    <LongText
        placeholder='installmentsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
