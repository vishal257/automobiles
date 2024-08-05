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
    <div className="p-4 w-9/12 rsm:w-5/6 rsm:p-0 mx-auto space-y-6 mt-6 pb-14 text-slate-800">
      <div className="font-black text-4xl text-center rsm:text-2xl">{title}</div>
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
            Near Hira Colony, Dholwaha Road, Distt- Hoshiarpur • Punjab, India • 01886-297885
          </div>
        </>
      )}
    </div>
  );
}
