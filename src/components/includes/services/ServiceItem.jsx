import { motion, useTransform } from "framer-motion";
import styled from "styled-components";


const ServiceItem = ({
    id = 0,
    isActive = false,
    activeIndex = [],
    serviceItem = {},
    top,
    scrollY
}) => {
    const y = useTransform(scrollY, [serviceItem.startingPoint, serviceItem.startingPoint + 0.1], ["0", "-100%"])

    return (
        <ServiceItemContainer
            // className={`${isActive && 'active'} ${Math.max(...activeIndex) > id && "small"}`}
            style={{
                y:top,
            }}
        >
            <ServiceItemLeft bg={serviceItem.image} />
            <ServiceItemRight>
                <ul>
                    {serviceItem?.services?.map((item, i) => (
                        <li key={i}>
                            <span className="icon">
                                <img src="/icons/services/tick.svg" alt="tick" />
                            </span>
                            <span className="service">{item.title}</span>
                        </li>
                    ))}
                </ul>
            </ServiceItemRight>
        </ServiceItemContainer>
    );
}

export default ServiceItem;


const ServiceItemContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    padding: 4px;
    position: absolute;
    border-radius: 18px;
    border: 1px solid #d3d3d3;
    top: 0;
    background-color: #fff;
    top: 100%;
    left: 0;
    transition: top 0.6s ease-in-out;
    /* bottom: 0; */

    display: flex;
    gap: 20px;

    &.active{
        top: 0;
    }
    &.small{
        /* opacity: 0; */
    }

    @media all and (max-width: 520px){
        flex-direction: column;
    }
`
const ServiceItemLeft = styled.div`
    width: calc(57% - 10px);
    /* width: auto; */
    /* max-width: auto; */
    height: 100%;
    background: url(${({ bg }) => bg}) center center no-repeat;
    border-radius: 18px;
    
    img{
    }

    @media all and (max-width: 520px){
        width: 100%;
        height: 200px;
    }
`
const ServiceItemRight = styled.div`
    width: calc(43% - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;

    @media all and (max-width: 520px){
        width: 100%;
    }

    ul{
        width: 100%;

        @media all and (max-width: 520px){
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        li{
            display: flex;
            align-items: start;
            gap: 14px;
            margin-bottom: 16px;

            &:last-child{
                margin: 0;
            }

            span.icon{
                display: flex;
                align-items: center;
                justify-content: center;

                img{
                    width: 20px;

                    @media all and (max-width: 460px){
                        width: 16px;
                    }
                }
            }
            span.service{
                color: #5E5E5E;
                font-size: 14px;

                @media all and (max-width: 520px){
                    font-size: 12px;
                }
            }

            @media all and (max-width: 520px){
                width: calc(50% - 10px);
                margin: 0;
            }
        }
    }
`