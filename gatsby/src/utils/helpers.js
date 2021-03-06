export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function pullJobs(data, title) {
  const job = data.filter((row) => row.data.Name === title);
  return job.map((row) => row.data);
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export const generatePath = (slug) => {
  if (slug === 'home') return '/';
  const formmatedSlug = slug?.replace(/\./g, '/');
  return `/${formmatedSlug}/`;
};
