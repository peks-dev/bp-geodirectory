import CourtModel from "@/models/court.model";

export async function courtPreview(courtData) {
  const court = new CourtModel();
  court.name = courtData.name;

  return court;
  // traer todas las imagenes de la tabla imagenes
  // traer la country, state, city de tabla location
}
