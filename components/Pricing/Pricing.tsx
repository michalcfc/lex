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
    isRadioPricing,
    pricing
}) => {

    const [isNoTime, setPrices] = useState(false)
    const [isChannelModalOpen, setChannelModal] = useState(false)
    const [pack, setChoosenPack] = useState('')

    const choosePack = (packName) => {
        setChoosenPack(packName)
        localStorage.setItem('choosenPack', mailTopic(packName));
    }

    const mailTopic = (packName) => {
        switch (packName) {
            case "OK":
                return "Telewizja z internetem 'Pakiet OK'"
            case "Optymalny":
                return "Telewizja z internetem 'Pakiet Optymalny'"
            case "Komfortowy":
                return "Telewizja z internetem 'Pakiet Komfortowy'"
            case "10 Mb/s":
                return "Internet radiowy 10 Mb/s"
            case "20 Mb/s":
                return "Internet radiowy 20 Mb/s"
            case "30 Mb/s":
                return "Internet radiowy 30 Mb/s"
            case "40 Mb/s":
                return "Internet radiowy 40 Mb/s"
            case "50 Mb/s":
                return "Internet radiowy 50 Mb/s"
            case "300 Mb/s":
                return "Światłowód 300 Mb/s"
            case "750 Mb/s":
                return "Światłowód 750 Mb/s"
            case "1000 Mb/s":
                return "Światłowód 1000 Mb/s"
        }
    }


    const changeValue = (packName) => {
        switch (packName) {
            case "10 Mb/s":
                return "20"
            case "20 Mb/s":
                return "30"
            case "30 Mb/s":
                return "35"
            case "40 Mb/s":
                return "40"
            case "50 Mb/s":
                return "45"
            case "300 Mb/s":
                return "60"
            case "750 Mb/s":
                return "75"
            case "1000 Mb/s":
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
            {(isNetworkPricing || isRadioPricing) && <PricingSwitchWrapper>
                <PricingSwitchTitle>Wybierz okres umowy:</PricingSwitchTitle>
                <PricingSwitch>
                    <PricingSwitchInput
                        id={isNetworkPricing ? '1' : '2'}
                        type="checkbox"
                        checked={isNoTime}
                        onChange={() => setPrices(!isNoTime)}
                    />
                    <PricingSwitchLabel htmlFor={isNetworkPricing ? '1' : '2'}>
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
                {pricing?.map(pack => {
                return (
                    <PricingPack>
                        <PricingHeader>
                            <PricingTitle>{pack.primary.plan_name[0].text}</PricingTitle>
                            {!isNetworkPricing && <PricingDescription>Umowa na 24 miesiące</PricingDescription>}
                        </PricingHeader>
                        {(isNetworkPricing || isRadioPricing)
                            && <ProgressBar>
                                <ProgressValue value={`${changeValue(pack.primary.plan_name[0].text)}`}></ProgressValue>
                            </ProgressBar>
                        }
                        <PricingItem>
                            {
                                pack.primary.download
                                && <FontAwesomeIcon icon={faArrowCircleUp}/>
                            }
                            {
                                pack.primary.download || pack.channels
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
                            {pack.primary.upload}
                        </PricingItem>}
                        <PricingItemPrice>
                            {isNoTime
                                ? pack.primary.indefinite_contract_price
                                :  pack.primary.term_contract_price || pack.tvAbo
                            }
                        </PricingItemPrice>
                        <PricingItem>
                            {pack.multiroom
                             && <div>{pack.multiroom}</div>
                            }
                            <span>{
                                isNoTime
                                ? pack.primary.indefinite_activation_price
                                : pack.primary.term_activation_price
                                || pack.decoder
                            }</span>
                        </PricingItem>
                        <PricingFooter>
                                <Link
                                    href={'/contact'}
                                    >
                            <StyledLink
                                onClick={() => choosePack(pack.primary.plan_name[0].text)}
                            >Wybieram</StyledLink>
                            </Link>
                        </PricingFooter>
                    </PricingPack>
                )})}
            </Grid>
            <PricingBottom>
                {!isTvPricing && !isRadioPricing && "Stały adres IP za dopłatą miesięcznie: 5zł"}
            <Modal
            title=""
            text=""
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