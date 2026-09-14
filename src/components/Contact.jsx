import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  Loader2,
  ExternalLink 
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'أعمال الحفر ونقل الأتربة',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      console.log('بيانات طلب الحفر/الردم المرسلة:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'أعمال الحفر ونقل الأتربة',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold mb-3">
            <MessageSquare size={14} />
            <span>تواصل ومعاينات المواقع</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            المقر الرئيسي بالعجمي - الإسكندرية وفروع العمل الميداني
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            يسعدنا استقبال استفساراتكم لطلب معاينات الأراضي والمواقع، حصر كميات الحفر والردم، وتقديم عروض الأسعار.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Map (Right Column in RTL) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="text-blue-600" size={22} />
                <span>المقر الرئيسي والعمليات</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">العنوان الرسمي</h4>
                    <p className="text-slate-600 leading-relaxed mt-0.5">{companyData.contact.address}</p>
                    <a
                      href={companyData.contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-bold mt-1.5"
                    >
                      <span>فتح الموقع المباشر على Google Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">أرقام التواصل والعمليات</h4>
                    <div className="mt-0.5 space-y-0.5" dir="ltr">
                      <a href={`tel:${companyData.contact.mobile.replace(/\s+/g, '')}`} className="block text-slate-600 hover:text-blue-600 font-medium">
                        {companyData.contact.mobile}
                      </a>
                      <a href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`} className="block text-slate-600 hover:text-blue-600 font-medium">
                        {companyData.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">البريد الإلكتروني</h4>
                    <div className="mt-0.5 space-y-0.5">
                      <a href={`mailto:${companyData.contact.email}`} className="block text-slate-600 hover:text-blue-600">
                        {companyData.contact.email}
                      </a>
                      <a href={`mailto:${companyData.contact.salesEmail}`} className="block text-slate-600 hover:text-blue-600">
                        {companyData.contact.salesEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">مواعيد العمل وإدارة المعدات</h4>
                    <p className="text-slate-600 mt-0.5">{companyData.contact.workingHours}</p>
                    <p className="text-xs text-slate-400 mt-0.5">مواقع العمل الميداني تعمل على مدار 24 ساعة بالمناوبات</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare size={18} />
                  <span>تواصل فوري عبر واتساب مع مسؤول الموقع</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed with Alexandria El Agami Exact Coordinates */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-72 w-full relative">
              <iframe
                title="موقع شركة صقر الجنوب بالعجمي على خرائط جوجل"
                src={companyData.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1 rounded-lg text-xs font-bold text-blue-950 shadow border border-slate-200">
                العجمي - الإسكندرية (31.0899877, 29.7272994)
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form (Left Column in RTL) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-blue-100 shadow-xl shadow-blue-900/5">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    تم استلام طلب المعاينة والمقايسة بنجاح!
                  </h3>
                  <p className="text-slate-600 text-base max-w-md mx-auto leading-relaxed">
                    شكراً لتواصلكم مع شركة صقر الجنوب (SGC). سيقوم المهندس المسؤول بالاتصال بكم خلال ساعات لترتيب موعد معاينة الموقع وتحديد كميات الحفر أو الردم المطلوبة.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-6 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow transition"
                  >
                    إرسال طلب موقع آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      طلب مقايسة أعمال حفر أو ردم أو معدات
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mb-6">
                      يرجى تحديد تفاصيل الموقع ونوع الأعمال المطلوبة وسنعاود الاتصال فوراً.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        اسم العميل / الشركة <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="مثال: شركة النماء للتطوير العقاري / م. محمد"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        رقم الهاتف / الجوال <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="010XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition text-right"
                      />
                    </div>
                  </div>

                  {/* Email & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        البريد الإلكتروني <span className="text-slate-400 font-normal">(اختياري)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        نوع الأعمال المطلوبة <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition cursor-pointer"
                      >
                        {companyData.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="تأجير معدات ثقيلة وحفارات">تأجير معدات ثقيلة وحفارات</option>
                        <option value="معاينة موقع واستشارة فنية">معاينة موقع واستشارة فنية</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Project details */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      موقع الأرض وكمية الحفر / الردم التقريبية <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اذكر موقع الأرض (مثلاً: الإسكندرية، الساحل الشمالي، برج العرب)، نوع التربة (رملية، صخرية، طينية)، وعمق الحفر أو مكعب الردم التقريبي..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>جاري إرسال الطلب...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>إرسال طلب المقايسة والمعاينة</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    يلتزم فريق صقر الجنوب بأعلى معايير السرية وسرعة الرد الميداني.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
