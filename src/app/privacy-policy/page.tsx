export default function page() {
  return (
    <div className="p-6 pb-12 w-3/4 mx-auto rmd:w-full text-slate-700">
        <div>
            <div className="privacy text-6xl text-slate-900">Privacy Policy</div>
            <p>Our website address is: https://www.esautoworks.com.</p>
        </div>
        <div className="py-5">
            <div className="privacy">What personal data we collect and why we collect it</div>
            <div className="privacy">Comments</div>
            <p className="pb-4">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
            <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
        </div>
        <div className="py-5">
            <div className="privacy">Media</div>
            <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
        </div>
      
    </div>
  )
}
