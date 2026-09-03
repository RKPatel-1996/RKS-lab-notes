import { useState, useEffect } from 'react';

export interface OrcidWork {
  title: string;
  journal: string;
  year: string;
  url: string;
  type: string;
}

export const useOrcid = (orcidId: string) => {
  const [publications, setPublications] = useState<OrcidWork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchOrcidData = async () => {
      try {
        const response = await fetch(`https://pub.orcid.org/v3.0/${orcidId}/works`, {
          headers: {
            'Accept': 'application/json'
          },
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`Failed to connect to ORCID (Status: ${response.status})`);
        }

        const data = await response.json();

        if (isMounted) {
          // Parse the complex ORCID structure

          const works: OrcidWork[] = data.group.map((group: any) => {
            const summary = group['work-summary'][0];
            const title = summary.title?.title?.value || 'Untitled Work';
            const journal = summary['journal-title']?.value || 'Unknown Journal';
            const year = summary['publication-date']?.year?.value || 'N/A';
            const url = summary.url?.value || summary['external-ids']?.['external-id']?.[0]?.['external-id-url']?.value || '#';
            const type = summary.type?.replace(/_/g, ' ') || 'publication';

            return { title, journal, year, url, type };
          });

          setPublications(works);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted && (err as Error).name !== 'AbortError') {
          console.error("ORCID Fetch Error:", err);
          setError('Error synchronizing with ORCID registry.');
          setLoading(false);
        }
      }
    };

    fetchOrcidData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [orcidId]);

  return { publications, loading, error };
};