(globalThis["webpackChunktombs_engineer"] =
  globalThis["webpackChunktombs_engineer"] || []).push([
  [58],
  {
    8058: (e, a, l) => {
      "use strict";
      l.r(a), l.d(a, { default: () => Qe });
      var s = l(9835),
        t = l(499),
        o = l(1957),
        i = l(7712),
        n = l(4554),
        r = l.n(n),
        m = l(5241),
        u = l.n(m),
        c = l(275),
        d = l.n(c),
        p = l(2914),
        f = l.n(p),
        b = l(1692),
        q = l.n(b),
        g = l(2696),
        h = l.n(g),
        v = l(7891),
        _ = l.n(v),
        w = l(74),
        x = l.n(w),
        y = l(7748),
        W = l.n(y);
      const S = {
          send: function (e) {
            return new Promise(function (a, l) {
              (e.nocache = Math.floor(1e6 * Math.random() + 1)),
                (e.Action = "Send");
              var s = JSON.stringify(e);
              S.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", s, function (e) {
                a(e);
              });
            });
          },
          ajaxPost: function (e, a, l) {
            var s = S.createCORSRequest("POST", e);
            s.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            ),
              (s.onload = function () {
                var e = s.responseText;
                null != l && l(e);
              }),
              s.send(a);
          },
          ajax: function (e, a) {
            var l = S.createCORSRequest("GET", e);
            (l.onload = function () {
              var e = l.responseText;
              null != a && a(e);
            }),
              l.send();
          },
          createCORSRequest: function (e, a) {
            var l = new XMLHttpRequest();
            return (
              "withCredentials" in l
                ? l.open(e, a, !0)
                : "undefined" != typeof XDomainRequest
                ? (l = new XDomainRequest()).open(e, a)
                : (l = null),
              l
            );
          },
        },
        j = (0, s._)(
          "div",
          { class: "logo col-6 col-md-3 row justify-center items-center" },
          [
            (0, s._)("p", { class: "q-ma-none" }, [
              (0, s._)("span", { class: "block t-fs-19" }, " TOMBS ENGINEER"),
              (0, s._)("span", { class: "block t-fs-19" }, " المهندس للمقابر "),
            ]),
          ],
          -1
        ),
        k = { class: "logo col-6 col-md-3 row justify-center" },
        V = { class: "banner", id: "home" },
        Q = { class: "about-us row q-mt-xl q-pa-xl", id: "about" },
        R = (0, s._)(
          "div",
          { class: "col-12 col-md-6 q-px-xl" },
          [
            (0, s._)(
              "h2",
              { class: "t-fs-32 q-ma-none q-pa-none q-mb-lg text-primary" },
              " إحنا مين "
            ),
            (0, s._)(
              "p",
              {
                class:
                  "q-pa-none q-ma-none t-fs-16 line-height-32 text-justify",
              },
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa fugit optio perferendis sunt? Aperiam quibusdam unde dolorum eveniet porro laboriosam, natus similique odio. Harum quisquam obcaecati a suscipit culpa expedita hic est quos amet, voluptates nesciunt, fugit quae maxime in, quam facilis mollitia vel itaque nobis numquam possimus sapiente cumque! Saepe similique voluptates necessitatibus accusantium architecto libero, eligendi a error adipisci exercitationem porro, fugit asperiores tempore et voluptatem corporis unde laudantium! Illum, modi aut illo cumque eos, incidunt laboriosam, quam quos fuga delectus libero impedit nulla alias adipisci. Quisquam ad adipisci repudiandae quasi, nihil harum illo! Et, esse ex. Dolores dolorem maxime distinctio vitae consequatur animi, fuga eaque ratione facilis tempore doloribus voluptate sed reprehenderit accusamus incidunt modi deleniti, necessitatibus maiores aperiam sequi eveniet. Iste, corporis. Consequatur unde quia eum? Ipsam aperiam ipsa reiciendis, ducimus ullam non incidunt porro quasi rem cumque voluptatum, magnam ad repudiandae corporis, fugiat id culpa? "
            ),
          ],
          -1
        ),
        U = { class: "col-12 col-md-6" },
        C = { class: "services", id: "services" },
        Z = (0, s._)(
          "div",
          { class: "section-title row justify-center" },
          [
            (0, s._)(
              "p",
              { class: "q-ma-none t-fs-32 text-secondary" },
              "خدماتنا"
            ),
          ],
          -1
        ),
        T = { class: "q-pa-xl" },
        H = { class: "row q-col-gutter-lg" },
        L = { class: "col-4" },
        M = (0, s._)("div", { class: "text-h5 q-mt-sm q-mb-xs" }, "فردى", -1),
        B = (0, s._)(
          "div",
          { class: "text-caption text-grey" },
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          -1
        ),
        E = { class: "col-4" },
        I = (0, s._)("div", { class: "text-h5 q-mt-sm q-mb-xs" }, "ثنائى", -1),
        A = (0, s._)(
          "div",
          { class: "text-caption text-grey" },
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          -1
        ),
        O = { class: "col-4" },
        F = (0, s._)("div", { class: "text-h5 q-mt-sm q-mb-xs" }, "عائلة", -1),
        P = (0, s._)(
          "div",
          { class: "text-caption text-grey" },
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
          -1
        ),
        z = { class: "contact-use", id: "card" },
        D = (0, s._)(
          "div",
          { class: "section-title row justify-center" },
          [
            (0, s._)(
              "p",
              { class: "q-ma-none t-fs-32 text-secondary" },
              "تواصل معنا"
            ),
          ],
          -1
        ),
        $ = { class: "q-pa-xl" },
        N = { class: "row q-col-gutter-lg" },
        X = { class: "col-12 col-md-6" },
        G = {
          class: "from-container gloabl-border q-pa-lg border-radius-10 row",
        },
        J = { class: "col-12 w-100 row" },
        K = { class: "col-12 col-md-6" },
        Y = { class: "scoial-media" },
        ee = (0, s._)("p", null, "ارقامنا و حساباتنا", -1),
        ae = { class: "icons row" },
        le = { class: "item col-6 q-py-md" },
        se = (0, s._)("span", null, "01021456365", -1),
        te = { class: "item col-6 q-py-md" },
        oe = (0, s._)("span", null, "01021456365", -1),
        ie = { class: "item col-6 q-py-md" },
        ne = (0, s._)("span", null, "01021456365", -1),
        re = { class: "item col-6 q-py-md" },
        me = (0, s._)("span", null, "01021456365", -1),
        ue = {
          __name: "MainLayout",
          setup(e) {
            const { t: a } = (0, i.QT)(),
              l = (0, t.iH)("mainMenu"),
              n = (0, t.iH)(1),
              m = (0, t.iH)(!0),
              c = (0, t.iH)({
                name: "jdnwkjn",
                phone: "wdwkldmwkl",
                email: "jdkwdnkwjd",
                message: "dkwlmdlkwmlkmdl",
              }),
              p = {
                requiredRule: [
                  (e) =>
                    (e && e.length > 0) || e > 0 || a("من فضلك ادخل البيانات"),
                ],
              },
              b = () => {
                S.send({
                  Host: "smtp.elasticemail.com",
                  Username: "kimosody125@gmail.com",
                  Password: "CB48E286944B8D574EFA93F5A045A1531B7B",
                  To: "omarelsheeta@bk.ru",
                  From: "omarelsheeta@bk.ru",
                  Subject: "new contact ",
                  Body: `\n    name : ${c.value.name}\n    phone : ${c.value.phone}\n    email : ${c.value.email}\n    message : ${c.value.message}\n    `,
                }).then((e) => {
                  console.log(e);
                });
              };
            return (e, a) => {
              const i = (0, s.up)("q-route-tab"),
                g = (0, s.up)("q-tabs"),
                v = (0, s.up)("q-btn"),
                w = (0, s.up)("q-header"),
                y = (0, s.up)("q-carousel-slide"),
                S = (0, s.up)("q-carousel"),
                ue = (0, s.up)("q-img"),
                ce = (0, s.up)("q-card-section"),
                de = (0, s.up)("q-card-actions"),
                pe = (0, s.up)("q-card"),
                fe = (0, s.up)("q-input"),
                be = (0, s.up)("q-form"),
                qe = (0, s.up)("q-icon"),
                ge = (0, s.up)("q-layout");
              return (
                (0, s.wg)(),
                (0, s.j4)(
                  ge,
                  { view: "lHh Lpr lFf", dir: "rtl" },
                  {
                    default: (0, s.w5)(() => [
                      (0, s.Wm)(
                        w,
                        {
                          elevated: "",
                          class:
                            "row justify-between bg-accent q-px-lg q-py-md",
                        },
                        {
                          default: (0, s.w5)(() => [
                            j,
                            (0, s.Wm)(
                              g,
                              {
                                modelValue: l.value,
                                "onUpdate:modelValue":
                                  a[0] || (a[0] = (e) => (l.value = e)),
                                "inline-label": "",
                                class:
                                  "bg-accent text-white col-6 row justify-between",
                              },
                              {
                                default: (0, s.w5)(() => [
                                  (0, s.Wm)(i, {
                                    class: "t-fs-24 font-bold",
                                    name: "mainMenu",
                                    label: "الرئيسية",
                                    to: { path: "/#/", hash: "#home" },
                                  }),
                                  (0, s.Wm)(i, {
                                    class: "t-fs-24 font-bold",
                                    name: "about",
                                    label: "احنا مين",
                                    to: { path: "/#/", hash: "#about" },
                                  }),
                                  (0, s.Wm)(i, {
                                    class: "t-fs-24 font-bold",
                                    name: "ourServices",
                                    label: "خدماتنا",
                                    to: { path: "/#/", hash: "#services" },
                                  }),
                                ]),
                                _: 1,
                              },
                              8,
                              ["modelValue"]
                            ),
                            (0, s._)("div", k, [
                              (0, s.Wm)(v, {
                                color: "white",
                                label: "تواصل معنا",
                                class: "text-black",
                                to: { path: "/", hash: "#card" },
                              }),
                            ]),
                          ]),
                          _: 1,
                        }
                      ),
                      (0, s._)("div", V, [
                        (0, s.Wm)(
                          S,
                          {
                            animated: "",
                            modelValue: n.value,
                            "onUpdate:modelValue":
                              a[1] || (a[1] = (e) => (n.value = e)),
                            navigation: "",
                            infinite: "",
                            autoplay: m.value,
                            height: "750px",
                          },
                          {
                            default: (0, s.w5)(() => [
                              (0, s.Wm)(
                                y,
                                { name: 1, "img-src": (0, t.SU)(r()) },
                                null,
                                8,
                                ["img-src"]
                              ),
                              (0, s.Wm)(
                                y,
                                { name: 2, "img-src": (0, t.SU)(u()) },
                                null,
                                8,
                                ["img-src"]
                              ),
                              (0, s.Wm)(
                                y,
                                { name: 3, "img-src": (0, t.SU)(d()) },
                                null,
                                8,
                                ["img-src"]
                              ),
                              (0, s.Wm)(
                                y,
                                { name: 4, "img-src": (0, t.SU)(f()) },
                                null,
                                8,
                                ["img-src"]
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["modelValue", "autoplay"]
                        ),
                      ]),
                      (0, s._)("div", Q, [
                        R,
                        (0, s._)("div", U, [
                          (0, s.Wm)(ue, { src: (0, t.SU)(q()) }, null, 8, [
                            "src",
                          ]),
                        ]),
                      ]),
                      (0, s._)("div", C, [
                        Z,
                        (0, s._)("div", T, [
                          (0, s._)("div", H, [
                            (0, s._)("div", L, [
                              (0, s.Wm)(
                                pe,
                                { class: "my-card", flat: "", bordered: "" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      ue,
                                      {
                                        width: "450px",
                                        height: "450px",
                                        src: (0, t.SU)(h()),
                                      },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                    (0, s.Wm)(ce, null, {
                                      default: (0, s.w5)(() => [M, B]),
                                      _: 1,
                                    }),
                                    (0, s.Wm)(de, null, {
                                      default: (0, s.w5)(() => [
                                        (0, s.Wm)(v, {
                                          to: { path: "/", hash: "#card" },
                                          outline: "",
                                          color: "primary",
                                          class: "t-fs-16",
                                          label: "إحجز الأن",
                                        }),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            (0, s._)("div", E, [
                              (0, s.Wm)(
                                pe,
                                { class: "my-card", flat: "", bordered: "" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      ue,
                                      {
                                        width: "450px",
                                        height: "450px",
                                        src: (0, t.SU)(_()),
                                      },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                    (0, s.Wm)(ce, null, {
                                      default: (0, s.w5)(() => [I, A]),
                                      _: 1,
                                    }),
                                    (0, s.Wm)(de, null, {
                                      default: (0, s.w5)(() => [
                                        (0, s.Wm)(v, {
                                          to: { path: "/", hash: "#card" },
                                          outline: "",
                                          color: "primary",
                                          class: "t-fs-16",
                                          label: "إحجز الأن",
                                        }),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            (0, s._)("div", O, [
                              (0, s.Wm)(
                                pe,
                                { class: "my-card", flat: "", bordered: "" },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s.Wm)(
                                      ue,
                                      {
                                        width: "450px",
                                        height: "450px",
                                        src: (0, t.SU)(x()),
                                      },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                    (0, s.Wm)(ce, null, {
                                      default: (0, s.w5)(() => [F, P]),
                                      _: 1,
                                    }),
                                    (0, s.Wm)(de, null, {
                                      default: (0, s.w5)(() => [
                                        (0, s.Wm)(v, {
                                          to: { path: "/", hash: "#card" },
                                          outline: "",
                                          color: "primary",
                                          class: "t-fs-16",
                                          label: "إحجز الأن",
                                        }),
                                      ]),
                                      _: 1,
                                    }),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                      (0, s._)("div", z, [
                        D,
                        (0, s._)("div", $, [
                          (0, s._)("div", N, [
                            (0, s._)("div", X, [
                              (0, s.Wm)(
                                be,
                                {
                                  greedy: "",
                                  onSubmit: (0, o.iM)(b, ["prevent"]),
                                },
                                {
                                  default: (0, s.w5)(() => [
                                    (0, s._)("div", G, [
                                      (0, s.Wm)(
                                        fe,
                                        {
                                          modelValue: c.value.name,
                                          "onUpdate:modelValue":
                                            a[2] ||
                                            (a[2] = (e) => (c.value.name = e)),
                                          type: "text",
                                          outlined: "",
                                          color: "primary",
                                          label: "الأسم",
                                          class:
                                            "col-12 border-radius-10 q-my-md",
                                          rules: p.requiredRule,
                                        },
                                        null,
                                        8,
                                        ["modelValue", "rules"]
                                      ),
                                      (0, s.Wm)(
                                        fe,
                                        {
                                          modelValue: c.value.phone,
                                          "onUpdate:modelValue":
                                            a[3] ||
                                            (a[3] = (e) => (c.value.phone = e)),
                                          type: "tel",
                                          outlined: "",
                                          color: "primary",
                                          label: "رقم المحمول الخاص بك",
                                          class:
                                            "col-12 border-radius-10 q-my-md",
                                          rules: p.requiredRule,
                                        },
                                        null,
                                        8,
                                        ["modelValue", "rules"]
                                      ),
                                      (0, s.Wm)(
                                        fe,
                                        {
                                          modelValue: c.value.email,
                                          "onUpdate:modelValue":
                                            a[4] ||
                                            (a[4] = (e) => (c.value.email = e)),
                                          type: "text",
                                          outlined: "",
                                          color: "primary",
                                          label: "البريد الالكتروني",
                                          class:
                                            "col-12 border-radius-10 q-my-md",
                                          rules: p.requiredRule,
                                        },
                                        null,
                                        8,
                                        ["modelValue", "rules"]
                                      ),
                                      (0, s.Wm)(
                                        fe,
                                        {
                                          modelValue: c.value.message,
                                          "onUpdate:modelValue":
                                            a[5] ||
                                            (a[5] = (e) =>
                                              (c.value.message = e)),
                                          type: "textarea",
                                          outlined: "",
                                          color: "primary",
                                          label: "رسالة توضيحية (اختياري)",
                                          class:
                                            "col-12 border-radius-10 q-my-md",
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                      (0, s._)("div", J, [
                                        (0, s.Wm)(v, {
                                          class: "q-py-sm col-12 t-fs-16",
                                          color: "primary",
                                          type: "submit",
                                          label: "ارسال رسالة",
                                          unelevated: "",
                                        }),
                                      ]),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["onSubmit"]
                              ),
                            ]),
                            (0, s._)("div", K, [
                              (0, s._)("div", null, [
                                (0, s.Wm)(
                                  ue,
                                  {
                                    src: (0, t.SU)(W()),
                                    height: "400px",
                                    fit: "contain",
                                  },
                                  null,
                                  8,
                                  ["src"]
                                ),
                              ]),
                              (0, s._)("div", Y, [
                                ee,
                                (0, s._)("div", ae, [
                                  (0, s._)("div", le, [
                                    (0, s.Wm)(qe, {
                                      size: "md",
                                      color: "primary",
                                      name: "phone",
                                      class: "q-px-md",
                                    }),
                                    se,
                                  ]),
                                  (0, s._)("div", te, [
                                    (0, s.Wm)(
                                      v,
                                      {
                                        class: "q-pa-none",
                                        flat: "",
                                        href: "https://api.whatsapp.com/send?phone=1028018440",
                                        target: "_blank",
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Wm)(qe, {
                                            size: "md",
                                            color: "primary",
                                            name: "fa-brands fa-whatsapp",
                                            class: "q-px-md",
                                          }),
                                          oe,
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  (0, s._)("div", ie, [
                                    (0, s.Wm)(
                                      v,
                                      {
                                        class: "q-pa-none",
                                        flat: "",
                                        href: "https://api.whatsapp.com/send?phone=1028018440",
                                        target: "_blank",
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Wm)(qe, {
                                            size: "md",
                                            color: "primary",
                                            name: "fa-brands fa-facebook",
                                            class: "q-px-md",
                                          }),
                                          ne,
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  (0, s._)("div", re, [
                                    (0, s.Wm)(
                                      v,
                                      {
                                        class: "q-pa-none",
                                        flat: "",
                                        href: "https://api.whatsapp.com/send?phone=1028018440",
                                        target: "_blank",
                                      },
                                      {
                                        default: (0, s.w5)(() => [
                                          (0, s.Wm)(qe, {
                                            size: "md",
                                            color: "primary",
                                            name: "fa-brands fa-instagram",
                                            class: "q-px-md",
                                          }),
                                          me,
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }
                )
              );
            };
          },
        };
      var ce = l(6030),
        de = l(6602),
        pe = l(2857),
        fe = l(2354),
        be = l(3333),
        qe = l(7661),
        ge = l(4455),
        he = l(960),
        ve = l(1694),
        _e = l(335),
        we = l(4458),
        xe = l(3190),
        ye = l(1821),
        We = l(8326),
        Se = l(2543),
        je = l(9984),
        ke = l.n(je);
      const Ve = ue,
        Qe = Ve;
      ke()(ue, "components", {
        QLayout: ce.Z,
        QHeader: de.Z,
        QIcon: pe.Z,
        QTabs: fe.Z,
        QRouteTab: be.Z,
        QTab: qe.Z,
        QBtn: ge.Z,
        QCarousel: he.Z,
        QCarouselSlide: ve.Z,
        QImg: _e.Z,
        QCard: we.Z,
        QCardSection: xe.Z,
        QCardActions: ye.Z,
        QForm: We.Z,
        QInput: Se.Z,
      });
    },
    4554: (e, a, l) => {
      e.exports = l.p + "img/banner-new-1-transformed.af610320.png";
    },
    5241: (e, a, l) => {
      e.exports = l.p + "img/banner-new-2-transformed.b1c44b29.png";
    },
    275: (e, a, l) => {
      e.exports = l.p + "img/banner-new-3-transformed.b5af9880.png";
    },
    2914: (e, a, l) => {
      e.exports = l.p + "img/banner-new-4-transformed.fd4afd83.png";
    },
    7748: (e, a, l) => {
      e.exports = l.p + "img/contact-us.e496eb5c.jpg";
    },
    7891: (e, a, l) => {
      e.exports = l.p + "img/couble.87a26bc2.jpeg";
    },
    74: (e, a, l) => {
      e.exports = l.p + "img/family_service-transformed.235df8eb.jpeg";
    },
    2696: (e, a, l) => {
      e.exports = l.p + "img/single.645ecef1.png";
    },
    1692: (e, a, l) => {
      e.exports = l.p + "img/who we are.5c731f7e.jpg";
    },
  },
]);
