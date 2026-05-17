# SGF Sourcing — Website Feedback & Task List

Source: `Summary. Design. Website..pptx.pdf`
Status legend: `[ ]` todo · `[~]` partial · `[x]` done · `[SOON]` deferred (future phase)

---

## 1. Website Hierarchy / Structure

Top-level nav (Home Page):
- About Us
- Services
- Find Partners
- Resources
- Contact
- Sourcing & Logistics
- Blog

---

## 2. Homepage — Adjustments

- [x] **Content**: Keep as-is (already contains tech sections: Brix, shelf life, export experience).
- [x] **Top logo**: Replace with the latest logo from the Brochure (apply to ALL positions sitewide).
  - File: [index.html](sgf-source/index.html), and every other page's header.
- [x] **Footer logo** (scroll to end of website): Resize logo so it isn't too small/large.

---

## 3. About Us — Adjustments

### Tab: Story
- [x] Add a new section: *"Markets SGF Sourcing has exported to"* — list:
  - Netherlands
  - Canada
  - Singapore
  - Australia
  - Japan
  - (Reference: "Top 10 Country of Destination" donut chart — Vietnam, Japan, South Korea, Taiwan/China, United States, Singapore, Thailand, United Arab Emirates, Australia, Netherlands.)
- [x] Display the region strip: `EUROPE · NORTH AMERICA · MIDDLE EAST · JAPAN · KOREA · TAIWAN`
- [x] Buttons under Story section: `YÊU CẦU BÁO GIÁ →` and `XEM THÔNG SỐ`
- File: [story.html](sgf-source/story.html) and/or [about.html](sgf-source/about.html)

### Tab: Why Us
- [x] Replace existing **3 reasons** with **5 reasons** ("NĂM LÝ DO NHÀ NHẬP KHẨU CHỌN SGF"):
  1. **Chuỗi cung ứng trách nhiệm**
     - Làm việc trực tiếp tại các nhà vườn/vựa dừa tại Bến Tre, Long An.
     - Cam kết nguồn cung không gãy kể cả mùa nghịch/biến động thị trường.
     - Đảm bảo lợi ích công bằng cho nông dân để duy trì chất lượng bền vững.
  2. **Brix 7°–9°**
     - Độ ngọt tự nhiên cao, chất lượng. Không thêm đường, không hương liệu — đất làm tất cả.
  3. **Đạt Chuẩn GlobalGAP**
     - Vườn của chúng tôi được kiểm định hàng năm. Tuân thủ MRL cho thị trường EU, Mỹ và Nhật Bản.
  4. **Tiêu Chuẩn Diamond Cut**
     - Mỗi trái được hoàn thiện riêng, bọc màng co và dán nhãn. Sẵn sàng lên kệ ngay khi đến.
  5. **Dịch vụ khách hàng đối tác**
     - Cập nhật tình hình mùa vụ, phản hồi mọi câu hỏi/đơn hàng trong vòng 24 hours.
     - Hỗ trợ trọn gói thủ tục xuất khẩu, chứng từ (Phyto, C/O) và Logistics.
     - Thiết kế giải pháp riêng cho từng nhà phân phối.
- File: [why-us.html](sgf-source/why-us.html)

### Images (About Us)
- [~] Images must match the content. Find images close to Story sections 1, 2, 3, 4.
- [~] All images should be close to product process.
- [~] Suggested reference image (river/canal in Bến Tre):
  https://www.dreamstime.com/aerial-view-tropical-canal-ben-tre-overhead-perspective-reveals-narrow-muddy-winding-dense-coconut-palms-lush-image427774415
- [~] Image cues by Story line:
  - *Trước khi có trái dừa, đã có dòng sông* → river/canal image
  - *Đôi tay thấu hiểu cây* → hands/farmer image
  - *Trái dừa chưa phải là sản phẩm khi nó rời khỏi vườn.*
  - *Cắt như viên kim cương* → Diamond Cut close-up
  - *Đây là nơi cái tên ra đời.*
  - *Từ vườn ra thế giới* → shipping/export visual
  - *Ba mươi đến bốn mươi lăm ngày.*
- [x] **Add 1 more picture**: "Cris Portrait" — appears on the About Us page next to the section "ETHICAL AT SOURCE. TRANSPARENT IN EVERY SHIPMENT." with subtitle "Built On Generations Of Trading Experience In Asia."

---

## 4. Services — Adjustments

### Content
- [x] **Delete** tab: *Packaging*
- [x] **Keep** tab: *Specifications*
- [x] Tab: *Resources* — (referenced; no specific change listed here, see section 6)
- [x] Tab: *Product* — copy all **9 products' descriptions** from the Brochure.
  - ⚠️ Do **NOT** include "semi-husked" — Cris doesn't sell this prototype.
- File: [product.html](sgf-source/product.html), [specifications.html](sgf-source/specifications.html); delete/hide [packing.html](sgf-source/packing.html)

### Images
- [x] Copy 9 products' images from the Brochure.
- [ ] The 9 products (per Brochure layout — Vietnamese names):
  1. Dừa Diamond Cut
  2. Dừa Bán Trọc Đánh Bóng (Cỡ Trung)
  3. Dừa Diamond Khắc Laser
  4. Dừa Cắt Hình Mũ
  5. Dừa Trọc Đánh Bóng (Cỡ Nhỏ)
  6. Diamond Cut Hút Chân Không
  7. Dừa Tươi Nguyên Trái
  8. Dừa Nắp Bật (Easy-opened Buttons)
  9. Dừa Trọc Vòng Kẽo (Cỡ Lớn)
- ⚠️ The slide shows some product images crossed out (X marks) — these images need to be replaced/adjusted.

---

## 5. Find Partners — R&D Partner Search

- [x] Title: "Tìm đơn vị đồng hành R&D"
- [x] **Write content** for this section (currently empty — "Please write something").

---

## 6. Resources — Adjustments

- [x] Content OK. Reference: https://afacade.github.io/SGF-Sourcing/sgf-source/resources.html
- File: [resources.html](sgf-source/resources.html)

---

## 7. Contact — Adjustments

### Content
- [x] **Do NOT** copy contact info from the Brochure — Cris does **not** want to show address or phone number.
- [x] Form should let customers **leave an email**.
- [x] Form should let customers **request a quote**.
- File: [contact.html](sgf-source/contact.html)

### Images
- [~] Optional — only include if relevant to contact context.

---

## 8. Sourcing & Logistics — Adjustments

- [x] Content OK. Reference: https://afacade.github.io/SGF-Sourcing/sgf-source/sourcing-logistics.html
- [~] Images: optional — only include if relevant.
- File: [sourcing-logistics.html](sgf-source/sourcing-logistics.html)

---

## 9. Blog — Adjustments

- [x] **5 blog posts** exist; images must comply with content.
- [x] **1 blog post needs to be updated** (content).
- [ ] Existing post titles/intros:
  1. **Phù sa dạy chúng tôi làm nghề.** — *Vùng đất dạy chúng tôi.* "Bến Tre không chỉ là khởi nguồn — đó là trường học của chúng tôi…"
  2. **Từ bán ăn đến container** — "Trái dừa rời vườn vẫn ngọt. Phải ăn liền không ngọt khi để 'n tay người mua."
  3. **Thương hiệu cao cấp, giá hợp lý** — "Cao cấp không phải là thiết, phải đắt đỏ."
  4. **Kế nối thị trường, giữ vững gốc rễ** — "Khẩu hiệu của chúng tôi là 'Vietnam Agri · Connecting Markets' — vai hai về đều quan trọng."
- [~] **Image review**: Find better images for the blog hero/thumbnail grid — current set (red soil photo "Phù Sa Của Vùng Đất Phù Sa" + thumbnails) needs replacements.
- [~] **Sources** for blog content:
  - News articles
  - LinkedIn posts that SGF Sourcing publishes
- File: [blog.html](sgf-source/blog.html)

---

## 10. Future / Deferred (SOON — not implementing now)

> Heading from slide: "NOT DOING BELOW BECAUSE IT IS FOR THE FUTURE"

- [SOON] **Shopping Cart** tab
- [SOON] **Tracking** tab
- [SOON] **Human Resources** tab
  - Create namecard files at `www.sgfsourcing.com/card/…`
  - "Mô hình quản lý 1 đất nước" — team roles:
    - R&D — Phoebe
    - Director / Contract Negotiation Analyst / Global Sourcing Specialist — Cris
    - Customer Relation Manager — Hanna Nguyễn
    - Branding Manager — Ari
    - Strategic Sourcing Manager — (borrowed profile, pending)
    - Procurement Manager (24h/7) — Tú

---

## 11. Phase 1 — Review Criteria

### Reference websites
- About Us / Story style: https://www.greenhillsourcing.com/
- Visual reference: https://vietnam-coconut.com/
- Test company: https://crm.vinacert.vn/vi/post

### Navigation & Flow
- [ ] **3 clicks rule**: User must be able to find technical specs in 3 clicks or fewer.
- [ ] **Image & content consistency** between tabs.
- [ ] **Linkage** between "About Us" and "Product Page".
- [~] **Language toggle**: Vietnamese ↔ English.
- [ ] **PC view** and **Phone view** both verified.
- [ ] **Global Network** displayed.

### Social Links — Update / Verify
- [ ] **Instagram**: link to be confirmed.
- [ ] **Facebook**: Review current SGF Sourcing Facebook page; decide whether to create a new page.
  - Current: https://www.facebook.com/profile.php?id=61585490951627
- [x] **LinkedIn**: Switch to the new LinkedIn page.
  - New: https://www.linkedin.com/company/110902379/admin/dashboard/
- [ ] **Alibaba**: link to be added/confirmed.

### Brochure-aligned page steps (from slide 15 reference)
- Tab 0: Story
- Tab 2: Website Layout
- Tab 3: Coconut
- Tab 4: B2B — COCO ALIBABA
- **Social Proof (Bằng chứng xã hội)**: Show customer testimonials, social-channel screenshots, container shipment photos. Filename example: `fresh-coconut-sgf-sourcing-.jpg`. Alt text: `Tốc độ tải trang` (loading-speed friendly).
- **Hero Section (Đầu trang)**: e.g., "Premium Vietnamese Fresh Coconut — From Our Farm to Your Port."
- **The Difference (Sự khác biệt)**: 3–4 reasons SGF stands out (Brix, GlobalGAP, quality control).
- **Technical Specifications (Thông số kỹ thuật)**: detailed B2B specs.
- **Sustainability & Traceability (Sự bền vững & Truy xuất nguồn gốc)**.
- **Step 2 — SEO + Hashtag**: SEO keywords: `Fresh Coconut Wholesale, Vietnam Green Young Coconut, Global Coconut Supplier`. Hashtag: "Công nghệ Nano Bạc & Màng sinh học: Bước tiến mới đưa dừa Việt chinh phục những thị trường khó tính nhất."
- **Step 3 — Chatbox**: Integrate WhatsApp or LinkedIn chat (Phoebe, Cris hoặc Roger) directly on site for instant inbound.
- **Step 4 — Call-to-Action (CTA)**: Use a contrasting yellow/orange color for buttons like "Request Wholesale Price" or "Contact our Sales Manager".
- **Step 5 — Video**:
  - Quay video ngắn: harvest and quality-control process at the farm.
  - Ghi lại cam nhận: short interview with farmer about cultivation process.

---

## Cross-cutting reminders

- ⚠️ Logo: always use the **latest** logo from the Brochure across every page (header + footer).
- ⚠️ Never list "semi-husked" as a product.
- ⚠️ Contact: no street address, no phone number.
- ⚠️ Images must match the content of the section they appear in.
