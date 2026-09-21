const fs = require('fs');
const path = require('path');

const dir = 'src/components/matematica';

const components = [
  'Header',
  'Hero',
  'ActivitiesPreview',
  'HowItWorks',
  'AudienceSection',
  'BenefitsBanner',
  'Testimonials',
  'IncludedMaterials',
  'BonusMaterials',
  'PricingSection',
  'FAQSection',
  'GuaranteeSection',
  'Footer'
];

components.forEach(name => {
  const content = `import { MissingAsset } from './MissingAsset';

export function ${name}() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-fredoka font-bold text-center mb-8">${name} Placeholder</h2>
      </div>
    </section>
  );
}
`;
  fs.writeFileSync(path.join(dir, `${name}.tsx`), content);
});
console.log('Components created!');
