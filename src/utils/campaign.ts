export const processFormValuesForRequest = (formValues: {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [key: string]: any
}) => {
  return {
    name: formValues.name,
    amount: +formValues.amount,
    prefix: formValues.prefix,
    currency: 'USD', // default value for now
    dateFrom: formValues.validityDate.startDate,
    dateTo: formValues.validityDate.endDate,
  }
}
