import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { ChevronLeft, ChevronRight, CirclePause, CirclePlay } from 'lucide-react'

const CategorySection = () => {
    // Static product data
    const staticProducts = [
        {
            _id: 1,
            productName: 'Shoe 1',
            productPrice: '120.00',
            productImages: ['shoe1_front.jpg', 'shoe1_back.jpg'],
            productTags: 'newArrivals'
        },
        {
            _id: 2,
            productName: 'Shoe 2',
            productPrice: '140.00',
            productImages: ['shoe2_front.jpg', 'shoe2_back.jpg'],
            productTags: 'bestSelling'
        },
    ]

    const [hoveredProduct, setHoveredProduct] = useState({})
    const [isPlaying, setIsPlaying] = useState(false)
    const [emblaRef, emblaApi] = useEmblaCarousel({}, [AutoScroll({ playOnInit: true })])

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
    const toggleAutoplay = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return
        autoScroll.isPlaying() ? autoScroll.stop() : autoScroll.play()
    }, [emblaApi])

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (autoScroll) {
            setIsPlaying(autoScroll.isPlaying())
            emblaApi.on('autoScroll:play', () => setIsPlaying(true))
            emblaApi.on('autoScroll:stop', () => setIsPlaying(false))
        }
    }, [emblaApi])

    return (
        <div className='relative'>
            <h1 className='text-center py-6 font-inter text-5xl font-bold italic text-white hover:text-black bg-violet3'>New Arrivals</h1>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {staticProducts.map((product) => (
                            <div className="embla__slide m-4" key={product._id}>
                                <div className="w-[520px] flex flex-col items-center rounded-lg border h-full relative"
                                    onMouseEnter={() => setHoveredProduct(prevState => ({ ...prevState, [product._id]: true }))}
                                    onMouseLeave={() => setHoveredProduct(prevState => ({ ...prevState, [product._id]: false }))}>
                                    
                                    <img
                                        src={hoveredProduct[product._id] ? product.productImages[1] : product.productImages[0]}
                                        alt="Product"
                                        width={320}
                                    />
                                    <div className="flex justify-between w-full px-4 py-4">
                                        <p>{product.productName.toUpperCase()}</p>
                                        <p>RM {product.productPrice}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="embla__controls flex justify-center mt-8">
                    <button onClick={scrollPrev} className="p-2">
                        <ChevronLeft />
                    </button>
                    <button onClick={toggleAutoplay} className="p-2">
                        {isPlaying ? <CirclePause /> : <CirclePlay />}
                    </button>
                    <button onClick={scrollNext} className="p-2">
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CategorySection