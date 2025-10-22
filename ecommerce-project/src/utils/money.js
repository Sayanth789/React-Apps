export function formatMoney(amountCents) {

    if (amountCents < 0 ) {
        // Here we add the feature to support negative numbers, and we do this as
        // Switch the negative number to positive using * -1.
        // Putting the negative sign at the front of the result.

        amountCents = amountCents * -1;
        return `$${(amountCents / 100).toFixed(2)}`;
    }

    return `-$${(amountCents / 100).toFixed(2)}`
  
}
