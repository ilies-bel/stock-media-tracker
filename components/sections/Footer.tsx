
const footerLinks = {
  product: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "API", href: "#" }
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" }
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy", href: "#" }
  ]
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 50 50" className="h-6 w-6">
                <g transform="translate(10, 10)">
                  <path d="M 15,3 
                           C 18,3 21,4 23,6
                           L 19,11
                           C 18,10 17,9 15,9
                           C 13,9 12,10 11,11
                           L 7,6
                           C 9,4 12,3 15,3 Z" 
                        fill="#EC6547"/>
                  <path d="M 23,7 
                           C 25,9 27,12 27,15
                           C 27,18 25,21 23,23
                           L 19,19
                           C 20,18 20,17 20,15
                           C 20,13 20,12 19,11
                           Z" 
                        fill="#F47A5E"/>
                  <path d="M 23,23 
                           C 21,25 18,27 15,27
                           C 12,27 9,25 7,23
                           L 11,19
                           C 12,20 13,20 15,20
                           C 17,20 18,20 19,19
                           Z" 
                        fill="#EC6547"/>
                  <path d="M 7,23 
                           C 5,21 3,18 3,15
                           C 3,12 5,9 7,7
                           L 11,11
                           C 10,12 9,13 9,15
                           C 9,17 10,18 11,19
                           Z" 
                        fill="#F47A5E"/>
                </g>
              </svg>
              <span className="font-serif text-lg font-bold">KeywordLens</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered keyword optimization for stock photographers
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 KeywordLens. All rights reserved.
        </div>
      </div>
    </footer>
  )
}