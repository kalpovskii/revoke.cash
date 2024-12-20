import { useQuery } from '@tanstack/react-query';
import { isNullish } from 'lib/utils';
import { HOUR } from 'lib/utils/time';
import { lookupAvvyName, lookupEnsName, lookupUnsName } from 'lib/utils/whois';
import { Address } from 'viem';

export const useNameLookup = (address?: Address) => {
  const { data: ensName } = useQuery({
    queryKey: ['ensName', address, { persist: true }],
    queryFn: () => lookupEnsName(address),
    enabled: !isNullish(address),
    staleTime: 12 * HOUR,
  });

  const { data: unsName } = useQuery({
    queryKey: ['unsName', address, { persist: true }],
    queryFn: () => lookupUnsName(address),
    enabled: !isNullish(address),
    staleTime: 12 * HOUR,
  });

  const { data: avvyName } = useQuery({
    queryKey: ['avvyName', address, { persist: true }],
    queryFn: () => lookupAvvyName(address),
    enabled: !isNullish(address),
    staleTime: 12 * HOUR,
  });

  return { ensName, unsName, avvyName, domainName: ensName || unsName || avvyName };
};
