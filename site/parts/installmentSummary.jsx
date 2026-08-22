export default ({ installment }) => <dl class='installmentSummary'>
    <dt class='sequence'>{installment.sequence}</dt>
    <dd class='dueDate'>{installment.dueDate}</dd>
    <dd class='totalAmount'>{installment.totalAmount}</dd>
    <dd class='paidAmount'>{installment.paidAmount}</dd>
</dl>
