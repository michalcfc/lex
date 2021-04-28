import { useState } from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowCircleUp,
    faArrowCircleDown
} from '@fortawesome/free-solid-svg-icons'
import { PricingProps } from "./Pricing.d";

import {
    PricingWrapper,
    PricingHeader,
    PricingTitle,
    PricingDescription,
    PricingItem,
    PricingPack,
    PricingSwitch,
    PricingSwitchWrapper,
    PricingSwitchSelect,
    PricingSwitchLabel,
    PricingSwitchInput,
    PricingSwitchTitle,
    PricingItemPrice,
    ProgressBar,
    PricingFooter,
    ProgressValue,
    PricingBottom,
    ChannelList,
    StyledLink
} from "./Pricing.styles"

import Grid from "@components/Grid";
import Modal from "@components/Modal";
import Button from "@components/Button"

const Section: React.FC<PricingProps> = ({
     isNetworkPricing,
    isTvPricing,
    pricing
}) => {

    const [isNoTime, setPrices] = useState(false)
    const [isChannelModalOpen, setChannelModal] = useState(false)
    const [pack, setChoosenPack] = useState('')

    const choosePack = (packName) => {
        setChoosenPack(packName)
        localStorage.setItem('choosenPack', packName);
    }

    const changeValue = (packName) => {
        switch (packName) {
            case "300 Mbps":
                return "40"
            case "750 Mbps":
                return "75"
            case "1000 Mbps":
                return "100"
            case "2 Gbps":
                return "100"
            case "6 Gbps":
                return "100"
            case "10 Gbps":
                return "100"
        }
    }

    return (
        <PricingWrapper>
            {isNetworkPricing && <PricingSwitchWrapper>
                <PricingSwitchTitle>Wybierz okres umowy:</PricingSwitchTitle>
                <PricingSwitch>
                    <PricingSwitchInput
                        id="pack"
                        type="checkbox"
                        checked={isNoTime}
                        onChange={() => setPrices(!isNoTime)}
                    />
                    <PricingSwitchLabel htmlFor="pack">
                        <PricingSwitchSelect
                            data-checked="Bezterminowo"
                            data-unchecked="24 miesiące"
                        ></PricingSwitchSelect>
                    </PricingSwitchLabel>
                </PricingSwitch>
            </PricingSwitchWrapper>}
            <Grid
                gridGap="30px"
                columns="repeat(auto-fit, minmax(260px, 1fr));"
                mt={4}
            >
                {pricing.map(pack => (
                    <PricingPack>
                        <PricingHeader>
                            <PricingTitle>{pack.name}</PricingTitle>
                            {!isNetworkPricing && <PricingDescription>Umowa na 24 miesiące</PricingDescription>}
                        </PricingHeader>
                        {isNetworkPricing
                            && <ProgressBar>
                                <ProgressValue value={`${changeValue(pack.name)}`}></ProgressValue>
                            </ProgressBar>
                        }
                        <PricingItem>
                            {
                                pack.download
                                && <FontAwesomeIcon icon={faArrowCircleUp}/>
                            }
                            {
                                pack.download || pack.channels
                            }
                            {isTvPricing
                                && <ChannelList onClick={() => setChannelModal(true)}>
                                    Zobacz listę kanałów
                                </ChannelList>
                            }
                        </PricingItem>
                        {isNetworkPricing
                            && <PricingItem>
                            <FontAwesomeIcon icon={faArrowCircleDown}/>
                            {pack.upload}
                        </PricingItem>}
                        <PricingItemPrice>
                            {isNoTime
                                ? pack.noTimeAbo
                                :  pack.twoYearsAbo  || pack.tvAbo
                            }
                        </PricingItemPrice>
                        <PricingItem>
                            {pack.multiroom
                             && <div>{pack.multiroom}</div>
                            }
                            <span>{
                                isNoTime
                                ? pack.noTimeActive
                                : pack.twoYearsActive
                                || pack.decoder
                            }</span>
                        </PricingItem>
                        <PricingFooter>
                                <Link
                                    href={'/contact'}
                                    >
                            <StyledLink
                                onClick={() => choosePack(pack.name)}
                            >Wybieram</StyledLink>
                            </Link>
                        </PricingFooter>
                    </PricingPack>
                ))}
            </Grid>
            <PricingBottom>
                {!isTvPricing && "Stały adres IP za dopłatą miesięcznie: 5zł"}
            <Modal
                    isOpen={isChannelModalOpen}
                    isClose={() => setChannelModal(false)}
                >
                    <img src="/img/channel_list.png" />
                </Modal>
            </PricingBottom>
        </PricingWrapper>
    )
}

export default Section;