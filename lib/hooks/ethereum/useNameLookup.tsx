import { useQuery } from '@tanstack/react-query';
import { lookupAvvyName, lookupEnsName, lookupUnsName } from 'lib/utils/whois';

export const useNameLookup = (address: string) => {
  const { data: ensName } = useQuery({
    queryKey: ['ensName', address, { persist: true }],
    queryFn: () => lookupEnsName(address),
    enabled: !!address,
  });

  const { data: unsName } = useQuery({
    queryKey: ['unsName', address, { persist: true }],
    queryFn: () => lookupUnsName(address),
    enabled: !!address,
  });

  const { data: avvyName } = useQuery({
    queryKey: ['avvyName', address, { persist: true }],
    queryFn: () => lookupAvvyName(address),
    enabled: !!address,
  });

  return { ensName, unsName, avvyName, domainName: ensName || unsName || avvyName };
};
