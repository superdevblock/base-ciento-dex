import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
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
        <img src="./images/main-image.png" style={{ width: '100%', borderRadius: '11px' }} />
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
                {t('Swap')}
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
    </>
  )
}

export default Home
