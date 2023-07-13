// eslint-disable-next-line no-unused-vars

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const response = await fetch('/api/vehicles.json');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  const detailsPromises = data.map(async (item) => {
    try {
      const detailsResponse = await fetch(item.apiUrl);
      if (!detailsResponse.ok) {
        throw new Error(`Failed to fetch details for vehicle with ID: ${item.id}`);
      }

      const detailsData = await detailsResponse.json();

      if (!detailsData.price) {
        throw new Error(`Failed to fetch prices for vehicle with ID: ${item.id}`);
      }

      return {
        ...item,
        name: item.modelYear,
        description: detailsData.description,
        price: detailsData.price,
        meta: detailsData.meta,
      };
    } catch (error) {
      return console.error(`Error fetching details for vehicle with ID: ${item.id}`, error);
    }
  });

  const detailsData = await Promise.all(detailsPromises);
  return detailsData.filter(Boolean);
}
