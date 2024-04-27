// Modification de la fonction pour accepter un second paramètre spécifiant la longueur de troncature
export const truncateText = (str: string, maxLength: number) => {
  if (str.length < maxLength) return str;
  return str.substring(0, maxLength) + "...";
};

