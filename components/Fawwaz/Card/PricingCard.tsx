import React, { FC } from 'react';
import { PricingCardProps } from '../component.type';
import Button from '../Button';

import Check from '../../assets/svg/Check';
import Star from '../../assets/svg/Star';

const PricingCard: FC<PricingCardProps> = ({ title, rate, type, content }) => {
    return (
        <>
            <div className='pricing-card lg:w-96 bg-white'>
                <div className={`card-header ${type=='basic' ? 'light-pink' : 'dark-pink'} flex flex-col justify-between items-center`}>
                    <div className="flex">
                    {type == 'basic' ? (
                        <Star opacity={0.5} />
                    ) : type == 'premium' ? (
                        <><Star opacity={0.7} /> <Star opacity={0.7} /></>
                    ) : <><Star /> <Star /> <Star /></>
                    }
                    </div>
                    <p className='card-title'>{title}</p>
                    <p className='card-rate'>{rate}</p>

                </div>
                <div className="card-content flex flex-col justify-around items-start p-0 m-0">
                    {content?.map((item, key) => (
                        <div className='flex gap-3 items-start justify-center mx-8' key={key}>
                            <Check />
                            <p className='content-item'>{item}</p>
                        </div>
                    ) )

                    }
                </div>
                <div className="card-footer">
                    <div className="px-4 mt-4 flex items-center justify-center flex-col">
                        <p className="border-t border-[#000] w-full mx-5 my-10 text-center" />
                        <div className='card-footer-content flex flex-col items-center gap-10 leading-normal'>
                            <p>Fully Responsive Design</p>
                            <Button
                                bgColor="bg-[#000]"
                                textColor="text-white"
                                className="py-2 px-10 text-[0.8em]">
                                Send Proposal
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingCard;