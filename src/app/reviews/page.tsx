import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Reviews | Chicago Commercial Cleaner',
  description:
    'See what Chicago businesses say about our commercial cleaning services. 5-star rated and trusted.',
};

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0891B2]/5 to-[#22C55E]/5 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#164E63] mb-4">
              Customer Reviews
            </h1>
            <p className="text-lg text-[#64748B]">
              See what Chicago businesses say about working with us.
            </p>
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-2xl font-bold text-[#164E63]">
                5.0 Rating
              </p>
              <p className="text-[#64748B]">Based on customer reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Sarah M.',
                  business: 'Marketing Firm',
                  location: 'Loop',
                  rating: 5,
                  text: 'Exceptional service! Our office has never looked better. The team is professional, reliable, and thorough.',
                },
                {
                  name: 'Michael R.',
                  business: 'Law Office',
                  location: 'River North',
                  rating: 5,
                  text: "We've tried several cleaning services, and Chicago Commercial Cleaner is by far the best. Highly recommend!",
                },
                {
                  name: 'Jennifer L.',
                  business: 'Medical Practice',
                  location: 'West Loop',
                  rating: 5,
                  text: 'Their attention to detail in our medical office is outstanding. HIPAA-compliant and always on time.',
                },
                {
                  name: 'David K.',
                  business: 'Restaurant',
                  location: 'South Loop',
                  rating: 5,
                  text: 'They keep our kitchen and dining area spotless. Health inspection ready every time!',
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-[#E2E8F0]"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-[#64748B] mb-4">"{review.text}""</p>
                  <div>
                    <p className="font-semibold text-[#164E63]">{review.name}</p>
                    <p className="text-sm text-[#64748B]">
                      {review.business}, {review.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
