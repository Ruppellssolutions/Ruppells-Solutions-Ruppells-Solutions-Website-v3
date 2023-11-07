import styled from "styled-components";


const ServiceItem = ({ id = 0, isActive = false, activeIndex = [], serviceItem = {} }) => {
    return (
        <ServiceItemContainer
            className={`${isActive && 'active'} ${Math.max(...activeIndex) > id && "small"}`}
        >
            <ServiceItemLeft>
                <img src={serviceItem.image} alt="branding" />
            </ServiceItemLeft>
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


const ServiceItemContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 4px;
    position: absolute;
    border-radius: 18px;
    border: 1px solid #d3d3d3;
    /* top: 0; */
    background-color: #fff;
    top: 80vh;
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
`
const ServiceItemLeft = styled.div`
    width: calc(57% - 10px);

    img{
        width: auto;
        /* max-width: auto; */
        max-height: 100%;
    }
`
const ServiceItemRight = styled.div`
    width: calc(43% - 10px);
    display: flex;
    align-items: center;
    justify-content: center;

    ul{
        width: 100%;
        li{
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 16px;

            &:last-child{
                margin: 0;
            }

            span.icon{
                img{
                    width: 20px;
                }
            }
            span.service{
                color: #5E5E5E;
                font-size: 17px;
            }
        }
    }
`