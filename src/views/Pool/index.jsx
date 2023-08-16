/* eslint-disable jsx-a11y/alt-text */
import { useTranslation } from '@pancakeswap/localization'
import { AddIcon, Button, ButtonMenu, CardBody, CardFooter, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useWeb3React } from '@pancakeswap/wagmi'
import Link from 'next/link'
import { useMemo } from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { AppBody, AppHeader } from '../../components/App'
import Dots from '../../components/Loader/Dots'
import FullPositionCard from '../../components/PositionCard'
import { PairState, usePairs } from '../../hooks/usePairs'
import { toV2LiquidityToken, useTrackedTokenPairs } from '../../state/user/hooks'
import { useTokenBalancesWithLoadingIndicator } from '../../state/wallet/hooks'
import Page from '../Page'


const Body = styled(CardBody)`
  background-color: ${({ theme }) => theme.colors.dropdownDeep};
`

export default function Pool() {
  const { account } = useWeb3React()
  const { t } = useTranslation()

  const { isMobile } = useMatchBreakpoints()

  const { isDark } = useTheme()

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs],
  )
  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens],
  )
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens,
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0'),
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances],
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances ||
    v2Pairs?.length < liquidityTokensWithBalances.length ||
    (v2Pairs?.length && v2Pairs.every(([pairState]) => pairState === PairState.LOADING))
  const allV2PairsWithLiquidity = v2Pairs
    ?.filter(([pairState, pair]) => pairState === PairState.EXISTS && Boolean(pair))
    .map(([, pair]) => pair)

  const renderBody = () => {
    if (!account) {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <Text color="textSubtle" textAlign="center">
          {t('Connect to a wallet to view your liquidity.')}
        </Text>
      )
    }
    if (v2IsLoading) {
      return (
        <Text color="textSubtle" textAlign="center">
          <Dots>{t('Loading')}</Dots>
        </Text>
      )
    }
    if (allV2PairsWithLiquidity?.length > 0) {
      return allV2PairsWithLiquidity.map((v2Pair, index) => (
        <FullPositionCard
          key={v2Pair.liquidityToken.address}
          pair={v2Pair}
          mb={index < allV2PairsWithLiquidity.length - 1 ? '16px' : 0}
        />
      ))
    }
    return (
      <Text color="textSubtle" textAlign="center">
        {t('No liquidity found.')}
      </Text>
    )
  }

  return (
    <Page>
      <Flex
        style={{
          width: '100%',
          fontFamily: 'Inter',
          fontSize: '24px',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginLeft: '10px',
          marginBottom: '10px',
          fontWeight: 700,
        }}
      >
        Liquidity
      </Flex>

      <Flex
        width="100%"
        justifyContent="center"
        position="relative"
        style={{
          borderRadius: '11px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          height: '214px',
          marginBottom: '60px',
        }}
      >
        <img
          src="./images/main-image.png"
          style={{ width: '100%', height: isMobile ? '120%' : '100%', borderRadius: '11px' }}
        />
        <div style={{ position: 'absolute' }}>
          <div
            style={{
              color: '#FFF',
              fontSize: '24px',
              fontStyle: 'normal',
              textAlign: 'center',
              fontWeight: '700',
              lineHeight: 'normal',
              paddingTop: '30px',
            }}
          >
            Ciento Liquidity from Synergy Nodes
          </div>
          <div
            style={{
              color: '#FFF',
              fontSize: '13px',
              fontStyle: 'normal',
              textAlign: 'center',
              fontWeight: '400',
              lineHeight: 'normal',
              paddingTop: '16px',
            }}
          >
            Ciento Exchange, a product of Synergy Nodes, facilitating seamless cryptocurrency trading and liquidity
            provision.
          </div>
          <div style={{ textAlignLast: 'center' }}>
            <ButtonMenu
              scale="md"
              variant="primary"
              marginBottom="20px"
              style={{ border: 'none', marginTop: '26px', background: 'transparent', textDecoration: 'none' }}
            >
              <a
                href="/swap"
                style={{
                  background: '',
                  color: 'white',
                  borderRadius: '5px',
                  border: '1px solid white',
                  padding: '10px 20px',
                  marginRight: '10px',
                  textDecoration: 'none',
                }}
              >
                {t('Swap Exchange')}
              </a>
              <a
                href="/liquidity"
                style={{
                  background: 'white',
                  color: '#06F',
                  borderRadius: '5px',
                  border: '1px solid #06F',
                  padding: '10px 20px',
                  marginRight: '10px',
                  textDecoration: 'none',
                }}
              >
                {t('Liquidity')}
              </a>
            </ButtonMenu>
          </div>
        </div>
      </Flex>
      <img
        src="./images/Ellipse.png"
        style={{ width: '100vw', height: '108%', position: 'absolute', objectFit: 'cover', zIndex: -999 }}
      />
      <div
        style={{
          color: isDark ? '#fff' : '#000',
          textAlign: 'center',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 'normal',
          marginBottom: '20px',
        }}
      >
        Liquidity
      </div>
      <AppBody>
        <AppHeader title={t('Your Liquidity')} subtitle={t('Add liquidity to receive LP tokens')} />
        <Body>
          {renderBody()}
          {account && !v2IsLoading && (
            <Flex flexDirection="column" alignItems="center" mt="24px">
              <Text color="textSubtle" mb="8px">
                {t("Don't see a pool you joined?")}
              </Text>
              <Link href="/find" passHref>
                <Button id="import-pool-link" variant="secondary" scale="sm" as="a">
                  {t('Find other LP tokens')}
                </Button>
              </Link>
            </Flex>
          )}
        </Body>
        <Flex
          style={{
            margin: '20px',
            alignItems: 'center',
          }}
        >
          <img src="./images/shield.png" style={{ marginRight: '15px' }} />
          Secured by Synergy Node
        </Flex>
        <CardFooter style={{ textAlign: 'center' }}>
          <Link href="/add" passHref>
            <Button id="join-pool-button" width="100%" startIcon={<AddIcon color="white" />}>
              {t('Add Liquidity')}
            </Button>
          </Link>
        </CardFooter>
      </AppBody>
    </Page>
  )
}
