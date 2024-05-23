---
title: 'Ежемесячный апдейт: Март 2024'
description: В марте мы начали сотрудничество со ScamSniffer, чтобы обеспечить алерты на панели Revoke.cash Dashboard в качестве первого шага к более глубокому пониманию риска апрува отдельных токенов. Мы также внесли ряд важных улучшений и доработок.
date: 2024-03-31
author: Rosco Kalis
translator: Andrei Kalpovski | https://github.com/kalpovskii
---

# Ежемесячный апдейт: Март 2024

В марте мы сделали первый шаг к более глубокому пониманию риска апрува отдельных токенов. Мы начали сотрудничество со ScamSniffer, чтобы обеспечить алерты в Revoke.cash Dashboard с использованием их блок-листа. Мы также провели много рефакторинга и других работ по обслуживанию, чтобы улучшить производительность и стабильность Revoke.cash.

## Revoke x ScamSniffer

С помощью наших инструментов безопасности мы всегда стараемся помочь нашим пользователям оставаться в безопасности. И для этого мы сотрудничаем со ScamSniffer, чтобы предоставлять алерты в Revoke.cash Dashboard с использованием их блок-листа. Когда один из заапрувленных вами токенов попадает в блок-лист ScamSniffer, вы увидите предупреждение в Revoke.cash Dashboard. Это поможет выявить потенциальных скамеров и сохранить ваши средства в безопасности.

![Revoke x ScamSniffer](/assets/images/blog/2024/monthly-update-march/scamsniffer.jpg)

Это первый шаг на пути к более глубокому пониманию рисков, связанных с апрувом отдельных токенов. В будущем мы планируем расширить эту функцию, чтобы предоставить больше информации о рисках, связанных с каждым из ваших апрувов, чтобы вы могли принимать взвешенные решения о том, какие апрувы следует отозвать.

## Исправления, улучшения и рефакторинг

В этом месяце мы провели много рефакторинга и других работ по обслуживанию. Большая часть этой работы была направлена на повышение производительности и стабильности Revoke.cash, например, обновление до последних версий Viem и Wagmi, добавление дополнительных развертываний Multicall3 и улучшение наших спам-фильтров токенов. Мы также внесли изменения в нашу систему поддержки сетей, чтобы в будущем было проще добавлять новые сети.

## Новые эксплойты

В марте мы стали свидетелями двух крупных black hat эксплойтов и одной значительной white hat операции. На DeFi-платформе Dolomite был использован один из устаревших контрактов 2019 года. Несмотря на то, что этот контракт уже давно не используется, пользователи все еще имели активные апрувы на его использование и потеряли почти $2 млн. Более $2 млн также потеряли пользователи DEX-биржи Unizen. Наконец, DEX ParaSwap обнаружила уязвимость в собственных контрактах и смогла спасти наиболее уязвимые средства своих пользователей.

- [Unizen Hack](/exploits/unizen)
- [ParaSwap Whitehat Hack](/exploits/paraswap)
- [Dolomite Hack](/exploits/dolomite)

## Новые поддерживаемые сети

Несмотря на то, что мы поддерживаем более 80 различных сетей, мы постоянно стремимся добавить новые. И в январе мы добавили поддержку 7 новых сетей и 2 новых тестовых сети.

Новые мейннеты:

- [Degen Chain](/token-approval-checker/degen-chain)
- [Merlin](/token-approval-checker/merlin)
- [Fraxtal](/token-approval-checker/fraxtal)
- [Beam](/token-approval-checker/beam)
- [inEVM](/token-approval-checker/inevm)
- [Immutable zkEVM](/token-approval-checker/immutable-zkevm)
- [zkLink Nova](/token-approval-checker/zklink-nova)

Новые тестнеты:

- [Beam Testnet](/token-approval-checker/beam-testnet)
- [Redstone Holesky](/token-approval-checker/redstone-holesky)