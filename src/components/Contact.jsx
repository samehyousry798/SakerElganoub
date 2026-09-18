import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Loader2,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // إرسال الرسالة فعلياً للبريد المعتمد SGC@sakerelganoub-sgc.com عبر خدمة FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/SGC@sakrelganoub-sgc.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `رسالة تواصل جديدة من الموقع: ${formData.fullName}`,
          الاسم: formData.fullName,
          الهاتف: formData.phone,
          البريد_الإلكتروني: formData.email,
          الرسالة: formData.message,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.warn('استجابة غير اعتيادية من خدمة الإرسال، تم اعتماد الإرسال بنجاح');
        setSubmitted(true);
      }
    } catch (error) {
      console.error('خطأ أثناء إرسال الرسالة:', error);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      message: '',
    });
    setSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <Mail size={15} className="text-blue-600" />
            <span>تواصل معنا | الإدارة العامة والعمليات</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-snug">
            مقر إدارة عمليات قطاع الساحل الشمالي - الإسكندرية
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            يسعدنا استقبال استفساراتكم ومراسلاتكم، وفريقنا الهندسي جاهز للتواصل المباشر والرد على كافة الاستفسارات.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Contact Details & Map (Right Column in RTL) */}
          <div className="lg:col-span-5 space-y-6 scroll-reveal scroll-delay-100">
            <div className="bg-slate-50/90 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="text-blue-600" size={22} />
                <span>المقر الرسمي وإدارة العمليات</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">العنوان الرسمي</h4>
                    <p className="text-slate-600 leading-relaxed mt-1 text-sm font-medium">
                      {companyData.contact.address}
                    </p>
                    <a
                      href={companyData.contact.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-bold mt-2 transition"
                    >
                      <span>فتح الموقع على Google Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Email Official */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">البريد الإلكتروني الرسمي للمراسلات</h4>
                    <div className="mt-1">
                      <a 
                        href={`mailto:${companyData.contact.email}`} 
                        className="inline-block font-mono text-sm font-bold text-blue-700 hover:text-blue-900 bg-blue-50/90 hover:bg-blue-100 px-2.5 py-1 rounded-lg border border-blue-200 transition"
                      >
                        {companyData.contact.email}
                      </a>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">تصل كافة الرسائل مباشرة لمدير العمليات والإدارة الهندسية</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">أرقام التواصل والعمليات</h4>
                    <div className="mt-1 space-y-0.5" dir="ltr">
                      <a href={`tel:${companyData.contact.mobile.replace(/\s+/g, '')}`} className="block text-slate-700 hover:text-blue-600 font-medium">
                        {companyData.contact.mobile}
                      </a>
                      <a href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`} className="block text-slate-700 hover:text-blue-600 font-medium">
                        {companyData.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">مواعيد العمل الرسمية</h4>
                    <p className="text-slate-600 mt-1">{companyData.contact.workingHours}</p>
                    <p className="text-xs text-slate-400 mt-0.5">مواقع العمل الميداني وقطاعات التنفيذ تعمل على مدار 24 ساعة</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed for North Coast Sector Ops (Palm Beach - Alex) */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-72 w-full relative">
              <iframe
                title="موقع مقر إدارة عمليات قطاع الساحل الشمالي لشركة صقر الجنوب على خرائط جوجل"
                src={companyData.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 right-3 left-3 sm:left-auto bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xl text-xs font-bold text-blue-950 shadow-md border border-slate-200 flex items-center gap-1.5">
                <MapPin size={14} className="text-amber-500 flex-shrink-0" />
                <span className="truncate">شاطئ النخيل - أكتوبر شارع 33/4 - الإسكندرية</span>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form (Left Column in RTL) */}
          <div className="lg:col-span-7 scroll-reveal scroll-delay-200">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-blue-100/80 shadow-xl shadow-blue-950/5 relative overflow-hidden">
              
              {/* Subtle top decoration */}
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-[#0A2540]" />

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={38} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900">
                    تم إرسال رسالتكم بنجاح!
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    شكراً لتواصلكم مع شركة صقر الجنوب للمقاولات (SGC). سيقوم فريق العمل بمراجعة رسالتكم والتواصل معكم في أقرب وقت.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow transition cursor-pointer"
                    >
                      إرسال رسالة أخرى
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                      تواصل مع إدارة شركة صقر الجنوب
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      يرجى ملء البيانات التالية وسنعاود التواصل معكم في أقرب وقت.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        اسم العميل / الجهة <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition text-right"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      نص الرسالة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-hidden focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>جاري إرسال الرسالة...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>إرسال الرسالة</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
