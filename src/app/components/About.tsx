import Button from "./Button";

interface Props {
  Data: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  visible: boolean;
}

export default function About({ Data, visible }: Props) {
  const { title, p1, p2, p3 } = Data;
  return (
    <div className="p-4 w-2/3 rsm:w-5/6 rsm:p-0 mx-auto space-y-6 mt-6 pb-14">
      <div className="font-black text-4xl text-center">{title}</div>
      <div className="text-justify space-y-4 leading-8 rsm:leading-6">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
      {visible && (
        <>
          <div className="flex justify-center py-2">
            <Button />
          </div>
          <div className="uppercase text-2xl font-black text-center">
            509 NW Everett Street • Portland, OR 97209 • 503-221-2411
          </div>
        </>
      )}
    </div>
  );
}
