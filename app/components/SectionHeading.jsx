import ContentWrapper from "./ContentWrapper";

export default function SectionHeading({headline, desc}) {
  return (
    <ContentWrapper>
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {headline}
        </h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          {desc}
        </p>
      </div>
    </ContentWrapper>
  );
}
