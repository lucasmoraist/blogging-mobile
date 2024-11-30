export const FormatDate = (date?: string) => {
    const dateObj = date ? new Date(date) : null;
    return dateObj?.toLocaleDateString('pt-br', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
}