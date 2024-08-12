import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";

export interface DataCardProps {
  title: string;
  shortDescription: string;
  image: string;
}

export function DataCard({ title, shortDescription, image }: DataCardProps) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl h-[150px]"
          src={image}
          width={270}
          height={150}
        />
      </CardBody>
      <CardFooter>
        <p className="text-tiny">{shortDescription}</p>
      </CardFooter>
    </Card>
  );
}
