"use client";
import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
// swipper styles

import "swiper/css";
import "swiper/css/pagination";
// requred modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Jhon Satria",
    job: "CEO",
    review:
      "Situs ini sangat membantu saya dalam mencari pelayanan homecare untuk orangtua saya. Pelayanan yang diberikan sangat profesional dan membantu kami dalam merawat orangtua di rumah.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Made Satria",
    job: "Dosen",
    review:
      "Situs ini memberikan pelayanan homecare yang sangat lengkap dan terpercaya. Mereka juga responsif terhadap kebutuhan dan permintaan kami. Sangat direkomendasikan!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Jhon doe",
    job: "Developer",
    review:
      "Saya sangat puas dengan pelayanan homecare yang diberikan oleh situs ini. Para caregiver-nya sangat perhatian dan cekatan dalam merawat anggota keluarga saya yang sedang sakit.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Jhon leo",
    job: "Chef",
    review:
      "Situs ini sangat membantu saya dalam mencari pelayanan homecare untuk orangtua saya. Pelayanan yang diberikan sangat cepat dan membantu kami dalam merawat anggota keluarga yang sedang sakit.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Liana doe",
    job: "Chef",
    review:
      "Situs ini sangat membantu saya dalam mencari pelayanan homecare untuk orangtua saya. Pelayanan yang diberikan sangat cepat dan membantu kami dalam merawat anggota keluarga yang sedang sakit.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="title-section mb-2 text-center mx-auto">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          className="h-[350px] w-[900px] lg:w-[1200px] gap-y-4"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-primary/50 dark:bg-accent p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-8 lg:mb-2">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-card-foreground leading-relaxed">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
