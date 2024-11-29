export const FormatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('pt-br', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
}