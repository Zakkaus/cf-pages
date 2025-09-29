(function () {
  const supportLinkClass = "font-semibold text-sky-300 hover:text-sky-200";

  const translations = {
    en: {
      common: {
        ray: "Ray ID: ::RAY_ID::",
        clientIp: "Visitor IP: ::CLIENT_IP::",
        brandName: "Zakk",
        rayHelp: "Cloudflare's Ray ID updates with every request. Sharing it with support helps us pinpoint issues faster.",
        themeToggleLabel: "Toggle color theme"
      },
      index: {
        pageTitle: "Cloudflare Error Templates",
        heading: "Zakk",
        description:
          "Modern Cloudflare custom pages powering help.zakk.au and zakk.au. Pick a template to preview the latest experience.",
        linkWafBlock: "WAF block",
        linkWafBlockDescription: "403 responses with security-first messaging.",
        linkIpBlock: "IP / Country block",
        linkIpBlockDescription: "Explain policy decisions and offer support routes.",
        linkIpChallenge: "IP / Country challenge",
        linkIpChallengeDescription: "Deliver respectful onboarding for higher-risk regions.",
        link500: "500 class errors",
        link500Description: "Reassure visitors when origin infrastructure misbehaves.",
        link1000: "1000 class errors",
        link1000Description: "Handle configuration problems with polished status updates.",
        linkAttack: "Managed challenge / I'm Under Attack Mode",
        linkAttackDescription: "Guide users through advanced protections with confidence.",
        linkRateLimit: "Rate limiting block",
        linkRateLimitDescription: "Set expectations when traffic needs to cool off.",
        linkOffline: "Always Online™ cache",
        linkOfflineDescription: "Preview the offline snapshot Cloudflare shows when your origin is unreachable."
      },
      cfWafBlock: {
        pageTitle: "Access denied | WAF block",
        categoryLabel: "WAF Block",
        status: '<span class="font-normal">403</span> Forbidden',
        messageMain: "Your request triggered a Web Application Firewall rule and was blocked to keep this site safe.",
        messageSecondary:
          `If you believe this was a mistake, please contact the site owner or open a <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=WAF%20Block%20|%20Ray%20ID:::RAY_ID::&body=Please include any details that can help us allow your access.">support ticket.</a>`
      },
      cfIpBlock: {
        pageTitle: "Access restricted | IP / Country block",
        categoryLabel: "IP / Country Block",
        heading: "Access restricted",
        messageMain: "Requests from your IP address or region are not allowed by the site's security policy.",
        messageSecondary:
          `If you require access, please contact the site owner or open a <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=IP%20%2F%20Country%20Block%20|%20Ray%20ID:::RAY_ID::&body=Let%20us%20know%20why%20you%20need%20access%20and%20we%E2%80%99ll%20take%20a%20look.">support ticket.</a>`
      },
      cfIpChallenge: {
        pageTitle: "Verification required | IP / Country challenge",
        categoryLabel: "IP / Country Challenge",
        heading: "Additional verification required",
        messageMain:
          "We need to confirm that requests from your location are legitimate. Complete the verification below to continue."
      },
      cf500: {
        pageTitle: "500-class error",
        categoryLabel: "500 Class Errors",
        heading: "Something went wrong on our side",
        messageMain:
          "The origin web server returned an unexpected response. Our team has been notified and is working on it.",
        messageSecondary:
          `If you need immediate assistance, please open a <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=500%20Class%20Error%20|%20Ray%20ID:::RAY_ID::&body=Share%20any%20steps%20that%20led%20to%20this%20error.">support ticket.</a>`
      },
      cf1000: {
        pageTitle: "1000-class error",
        categoryLabel: "1000 Class Errors",
        heading: "Origin configuration error",
        messageMain:
          "Cloudflare is unable to reach the configured origin. This could be due to DNS or configuration issues on our end.",
        messageSecondary:
          `Please open a <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=1000%20Class%20Error%20|%20Ray%20ID:::RAY_ID::&body=Tell%20us%20what%20you%20were%20trying%20to%20reach%20so%20we%20can%20help.">support ticket</a> if you require urgent access.`
      },
      cfAttack: {
        pageTitle: "Quick safety check",
        categoryLabel: "Managed Challenge / I'm Under Attack Mode",
        heading: "Managed challenge in progress",
        messageMain: "We need to confirm you're human.",
        messageSecondary:
          `<p>Complete the verification below to continue browsing.</p><p class="mt-4">If the challenge repeats or fails, refresh the page or email <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Managed%20Challenge%20Loop%20|%20Ray%20ID:::RAY_ID::&body=Ray%20ID:%20::RAY_ID::%0ADescription:%20">admin@zakk.au</a> with this Ray ID.</p>`,
        challengeHint: "The challenge loads automatically. Follow the prompts and you'll be back shortly.",
        statusNotice:
          "Cloudflare may respond with HTTP 403 while the check runs. That's normal and clears once you pass the challenge."
      },
      cfRateLimit: {
        pageTitle: "429 | Rate limiting",
        categoryLabel: "Rate Limiting",
        heading: "Too many requests",
        messageMain:
          "You've sent too many requests in a short period. To keep the service stable we've temporarily limited traffic from your IP.",
        messageSecondary:
          `If you believe this is an error, please wait a moment and retry or contact us via <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Rate%20Limiting%20Block%20|%20Ray%20ID:::RAY_ID::&body=Let%20us%20know%20what%20you%20were%20doing%20so%20we%20can%20tune%20our%20limits.">support ticket.</a>`
      },
      cfChallengeBasic: {
        pageTitle: "Security check | Basic challenge",
        categoryLabel: "Security Challenge",
        heading: "One quick check",
        messageMain: "Complete the verification below so we can confirm you're real and keep the forum safe.",
        messageSecondary:
          `Need help? Open a <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Basic%20Challenge%20Assistance%20|%20Ray%20ID:::RAY_ID::&body=Tell%20us%20what%20you%E2%80%99re%20accessing%20and%20we%E2%80%99ll%20assist.">support ticket.</a>`
      },
      cfCountryChallenge: {
        pageTitle: "Security check | Country challenge",
        categoryLabel: "Country Challenge",
        heading: "Extra verification required",
        messageMain: "We run additional checks for traffic from your region. Please finish the challenge to continue.",
        messageSecondary:
          `If you think this is unexpected, contact us via <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Country%20Challenge%20Review%20|%20Ray%20ID:::RAY_ID::&body=Share%20why%20you%20need%20access%20so%20we%20can%20review%20the%20policy.">support ticket.</a>`
      },
      cfWafChallenge: {
        pageTitle: "Security check | WAF challenge",
        categoryLabel: "WAF Challenge",
        heading: "Just verifying",
        messageMain: "Cloudflare needs you to complete this challenge before we can let you through.",
        messageSecondary:
          `Still stuck? Reach out through a <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=WAF%20Challenge%20Help%20|%20Ray%20ID:::RAY_ID::&body=Include%20the%20URL%20you%E2%80%99re%20trying%20to%20reach.%20We%E2%80%99ll%20investigate.">support ticket.</a>`
      },
      offline: {
        badge: "Always Online™",
        status: "Legacy cache",
        tagline: "This cached page keeps key details handy while we restore the live site.",
        detailsHeading: "What's happening",
        detailStatus: "Always Online™ is serving a cached copy while the origin recovers.",
        detailLinks: "Some links or actions may be outdated until the live site returns.",
        detailContact:
          'Need help right now? Email <a class="underline decoration-sky-300/60 underline-offset-4 hover:text-white" href="mailto:admin@zakk.au">admin@zakk.au</a>.',
        refresh: "Refresh",
        refreshNoscript: "(Enable JavaScript first.)",
        message:
          '<p><strong>error.zakk.au</strong> is temporarily offline. Cloudflare&apos;s <a href="https://www.cloudflare.com/always-online/" target="_blank" role="link">Always Online™</a> is sharing a cached page from the <a href="https://archive.org/web/" target="_blank" role="link">Internet Archive&apos;s Wayback Machine</a> so you don&apos;t miss important info.</p><p>Use the button below to check the live site again, or close this notice with the × in the top-right corner.</p>',
        refreshHint: "We&apos;ll take you back to the live site as soon as it&apos;s available."
      }
    },
    zhHans: {
      common: {
        ray: "Ray ID：::RAY_ID::",
        clientIp: "客户端 IP：::CLIENT_IP::",
        brandName: "Zakk",
        rayHelp: "Cloudflare 的 Ray ID 会在每次请求时刷新。将它提供给我们的支持团队能够帮助更快定位问题。",
        themeToggleLabel: "切换配色模式"
      },
      index: {
        pageTitle: "Cloudflare 错误页面模板",
        heading: "Zakk",
        description: "这里汇集了 help.zakk.au 与 zakk.au 使用的 Cloudflare 自定义页面，欢迎预览与复用。",
        linkWafBlock: "WAF 阻止",
        linkWafBlockDescription: "以安全为先的 403 响应文案。",
        linkIpBlock: "IP / 国家阻止",
        linkIpBlockDescription: "清晰说明策略并提供支援渠道。",
        linkIpChallenge: "IP / 国家挑战",
        linkIpChallengeDescription: "为高风险地区提供友善的验证流程。",
        link500: "500 系列错误",
        link500Description: "在源站异常时安抚访问者。",
        link1000: "1000 系列错误",
        link1000Description: "以专业语气说明配置问题。",
        linkAttack: "受管理挑战 / 我正遭受攻击模式",
        linkAttackDescription: "自信引导用户完成高级防护验证。",
        linkRateLimit: "速率限制阻止",
        linkRateLimitDescription: "在需要降温时设定访问预期。",
        linkOffline: "Always Online™ 离线缓存",
        linkOfflineDescription: "预览源站离线时 Cloudflare 展示的缓存页面。"
      },
      cfWafBlock: {
        pageTitle: "访问被拒绝 | WAF 阻止",
        categoryLabel: "WAF 阻止",
        status: '<span class="font-normal">403</span> 禁止',
        messageMain: "你的请求触发了 Web 应用防火墙规则，为了站点安全已被阻止。",
        messageSecondary:
          `如果你认为这是误判，请联系站点所有者或提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=WAF%20Block%20|%20Ray%20ID:::RAY_ID::&body=%E8%AF%B7%E6%91%98%E8%A6%81%E8%BF%99%E6%AC%A1%E8%AE%BF%E9%97%AE%E7%9A%84%E7%94%A8%E9%80%94%E4%BB%A5%E4%BE%BF%E6%88%91%E4%BB%AC%E6%8E%88%E6%9D%83%E3%80%82">支持工单</a>。`
      },
      cfIpBlock: {
        pageTitle: "访问受限 | IP / 国家阻止",
        categoryLabel: "IP / 国家阻止",
        heading: "访问受限",
        messageMain: "由于站点的安全策略，你所在的 IP 地址或地区暂时无法访问该页面。",
        messageSecondary:
          `如需访问，请联系站点所有者或提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=IP%20%2F%20Country%20Block%20|%20Ray%20ID:::RAY_ID::&body=%E8%AF%B7%E7%AE%80%E8%A6%81%E8%BF%99%E6%AC%A1%E8%AE%BF%E9%97%AE%E7%9A%84%E7%90%86%E7%94%B1%E4%BB%A5%E4%BE%BF%E5%AE%A1%E6%A0%B8%E3%80%82">支持工单</a>。`
      },
      cfIpChallenge: {
        pageTitle: "需要验证 | IP / 国家挑战",
        categoryLabel: "IP / 国家挑战",
        heading: "请完成额外验证",
        messageMain: "我们需要确认来自你所在位置的请求是合法的，请完成下面的验证以继续访问。"
      },
      cf500: {
        pageTitle: "500 系列错误",
        categoryLabel: "500 系列错误",
        heading: "我们这边出现了问题",
        messageMain: "源站服务器返回了异常响应，我们已接到通知并正在处理中。",
        messageSecondary:
          `如需立即协助，请提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=500%20Class%20Error%20|%20Ray%20ID:::RAY_ID::&body=%E8%AF%B7%E8%AF%B4%E6%98%8E%E9%81%87%E5%88%B0%E9%97%AE%E9%A2%98%E7%9A%84%E6%AD%A5%E9%AA%A4%E3%80%82">支持工单</a>。`
      },
      cf1000: {
        pageTitle: "1000 系列错误",
        categoryLabel: "1000 系列错误",
        heading: "源站配置异常",
        messageMain: "Cloudflare 暂时无法连接到配置的源站，这通常与 DNS 或配置有关。",
        messageSecondary:
          `如果你需要紧急访问，请提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=1000%20Class%20Error%20|%20Ray%20ID:::RAY_ID::&body=%E8%AF%B7%E8%AF%B4%E6%98%8E%E8%A6%81%E8%AE%BF%E9%97%AE%E7%9A%84%E5%86%85%E5%AE%B9%E3%80%82">支持工单</a>。`
      },
      cfAttack: {
        pageTitle: "快速安全检查",
        categoryLabel: "受管理挑战 / I'm Under Attack Mode",
        heading: "正在进行安全质询",
        messageMain: "我们需要确认你是人类。",
          messageSecondary:
            `<p>请完成下方验证以继续浏览。</p><p class="mt-4">若验证重复或失败，请刷新页面，或写信至 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Managed%20Challenge%20Loop%20|%20Ray%20ID:::RAY_ID::&body=Ray%20ID:%20::RAY_ID::%0A%E9%97%AE%E9%A2%98%E6%8F%8F%E8%BF%B0:%20">admin@zakk.au</a> 并附上此 Ray ID。</p>`,
        challengeHint: "验证会在这里自动出现，按照提示完成后即可继续。",
        statusNotice: "挑战运行时 Cloudflare 可能暂时返回 HTTP 403，完成验证后会自动恢复。"
      },
      cfRateLimit: {
        pageTitle: "429 | 速率限制",
        categoryLabel: "速率限制",
        heading: "请求过多",
        messageMain: "你在短时间内发出了过多请求。为保持服务稳定，我们暂时限制了该 IP 的访问。",
        messageSecondary:
          `如果你认为这是错误，请稍后再试，或提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Rate%20Limiting%20Block%20|%20Ray%20ID:::RAY_ID::&body=%E8%AF%B7%E8%AF%B4%E6%98%8E%E5%BD%93%E6%97%B6%E6%89%80%E5%81%9A%E7%9A%84%E6%93%8D%E4%BD%9C%E3%80%82">支持工单</a>。`
      },
      cfChallengeBasic: {
        pageTitle: "安全检查 | 基础挑战",
        categoryLabel: "安全挑战",
        heading: "请完成快速验证",
        messageMain: "为了保护学生论坛，我们需要确认你不是机器人，请完成下方验证。",
        messageSecondary:
          `如需协助，请提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Basic%20Challenge%20Assistance%20|%20Ray%20ID:::RAY_ID::&body=%E8%AF%B7%E6%8F%8F%E8%BF%B0%E4%BD%A0%E8%AE%BF%E9%97%AE%E7%9A%84%E5%86%85%E5%AE%B9%E3%80%82">支持工单</a>。`
      },
      cfCountryChallenge: {
        pageTitle: "安全检查 | 国家挑战",
        categoryLabel: "国家挑战",
        heading: "需要额外验证",
        messageMain: "来自你所在地区的流量需要额外检查，请完成挑战以继续访问。",
        messageSecondary:
          `如果这看起来不合理，请提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Country%20Challenge%20Review%20|%20Ray%20ID:::RAY_ID::&body=%E8%AF%B7%E8%AF%B4%E6%98%8E%E8%A6%81%E8%AE%BF%E9%97%AE%E7%9A%84%E5%B9%B3%E5%8F%B0%E6%88%96%E6%8F%90%E4%BE%9B%E6%9B%B4%E5%A4%9A%E8%B5%84%E6%96%99%E3%80%82">支持工单</a>。`
      },
      cfWafChallenge: {
        pageTitle: "安全检查 | WAF 挑战",
        categoryLabel: "WAF 挑战",
        heading: "请稍候完成验证",
        messageMain: "在我们放行之前，请完成 Cloudflare 的安全挑战。",
        messageSecondary:
          `如果仍无法通过，请提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=WAF%20Challenge%20Help%20|%20Ray%20ID:::RAY_ID::&body=%E8%AF%B7%E6%8F%8F%E8%BF%B0%E6%82%A8%E5%9C%A8%E8%AE%BF%E9%97%AE%E7%9A%84%E5%9C%B0%E5%9D%80%E5%92%8C%E9%97%AE%E9%A2%98%E3%80%82">支持工单</a>。`
      },
      offline: {
        badge: "Always Online™",
        status: "缓存副本",
        tagline: "这份缓存页面会在我们修复期间保留重要信息。",
        detailsHeading: "当前状态",
        detailStatus: "Always Online™ 正在提供临时副本，等待源站恢复。",
        detailLinks: "在源站恢复之前，部分链接或操作可能暂时失效。",
        detailContact:
          '需要即时协助？请发送邮件至 <a class="underline decoration-sky-300/60 underline-offset-4 hover:text-white" href="mailto:admin@zakk.au">admin@zakk.au</a>。',
        refresh: "刷新",
        refreshNoscript: "(请先启用 JavaScript。)",
        message:
          '<p><strong>error.zakk.au</strong> 的在线版本暂时无法访问。<a href="https://www.cloudflare.com/always-online/" target="_blank" role="link">Cloudflare 的 Always Online™</a> 正在提供来自 <a href="https://archive.org/web/" target="_blank" role="link">Internet Archive Wayback Machine</a> 的缓存页面，让你不错过重要信息。</p><p>使用下方按钮即可重新检查线上版本，若想暂时关闭提示，可点击右上角的 ×。</p>',
        refreshHint: "网站恢复后，我们会立即带你回到线上版本。"
      }
    },
    zhHant: {
      common: {
        ray: "Ray ID：::RAY_ID::",
        clientIp: "用戶端 IP：::CLIENT_IP::",
        brandName: "Zakk",
        rayHelp: "Cloudflare 的 Ray ID 會在每次請求時更新，提供給支援團隊可協助我們快速定位問題。",
        themeToggleLabel: "切換配色模式"
      },
      index: {
        pageTitle: "Cloudflare 錯誤頁面範本",
        heading: "Zakk",
        description: "這裡匯整 help.zakk.au 與 zakk.au 採用的 Cloudflare 自訂頁面，歡迎預覽與套用。",
        linkWafBlock: "WAF 封鎖",
        linkWafBlockDescription: "以安全為先的 403 回應內容。",
        linkIpBlock: "IP / 國別封鎖",
        linkIpBlockDescription: "清楚說明策略並提供支援管道。",
        linkIpChallenge: "IP / 國別挑戰",
        linkIpChallengeDescription: "為高風險地區提供友善的驗證流程。",
        link500: "500 系列錯誤",
        link500Description: "在源站異常時安撫訪客。",
        link1000: "1000 系列錯誤",
        link1000Description: "以專業語氣說明設定問題。",
        linkAttack: "受管理挑戰 / 我正遭受攻擊模式",
        linkAttackDescription: "自信引導使用者通過進階防護。",
        linkRateLimit: "速率限制封鎖",
        linkRateLimitDescription: "在需降載時設定造訪預期。",
        linkOffline: "Always Online™ 離線快取",
        linkOfflineDescription: "預覽來源離線時 Cloudflare 呈現的快取頁面。"
      },
      cfWafBlock: {
        pageTitle: "存取被拒 | WAF 封鎖",
        categoryLabel: "WAF 封鎖",
        status: '<span class="font-normal">403</span> 禁止',
        messageMain: "你的請求觸發了 Web 應用程式防火牆規則，為了站點安全已被封鎖。",
        messageSecondary:
          `若你認為這是誤判，請聯絡站點擁有者或提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=WAF%20Block%20|%20Ray%20ID:::RAY_ID::&body=%E8%AB%8B%E7%AE%80%E8%BF%B0%E8%A6%81%E8%AE%BF%E9%97%AE%E7%9A%84%E5%86%85%E5%AE%B9%E4%BB%A5%E4%BE%BF%E5%AE%89%E6%8E%A7%E3%80%82">支援工單</a>。`
      },
      cfIpBlock: {
        pageTitle: "存取受限 | IP / 國別封鎖",
        categoryLabel: "IP / 國別封鎖",
        heading: "存取受限",
        messageMain: "依據站點安全政策，你的 IP 位址或所在國家/地區暫時無法存取此頁面。",
        messageSecondary:
          `若需要協助，請聯絡站點擁有者或提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=IP%20%2F%20Country%20Block%20|%20Ray%20ID:::RAY_ID::&body=%E8%AB%8B%E7%B0%A1%E8%BF%B0%E6%AD%A4%E6%AC%A1%E8%A8%AA%E5%95%8F%E7%9A%84%E7%90%86%E7%94%B1%E3%80%82">支援工單</a>。`
      },
      cfIpChallenge: {
        pageTitle: "需要驗證 | IP / 國別挑戰",
        categoryLabel: "IP / 國別挑戰",
        heading: "請完成額外驗證",
        messageMain: "我們需要確認來自你所在位置的請求是合法的，請完成下方驗證後再繼續。"
      },
      cf500: {
        pageTitle: "500 系列錯誤",
        categoryLabel: "500 系列錯誤",
        heading: "我們這邊出了點狀況",
        messageMain: "來源伺服器回傳了非預期的回應，我們已接獲通知並正在處理。",
        messageSecondary:
          `若需要立即協助，請提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=500%20Class%20Error%20|%20Ray%20ID:::RAY_ID::&body=%E8%AB%8B%E8%AA%AA%E6%98%8E%E9%81%87%E9%81%87%E5%95%8F%E9%A1%8C%E7%9A%84%E6%AD%A5%E9%A9%9F%E3%80%82">支援工單</a>。`
      },
      cf1000: {
        pageTitle: "1000 系列錯誤",
        categoryLabel: "1000 系列錯誤",
        heading: "來源設定錯誤",
        messageMain: "Cloudflare 目前無法連線到設定的來源伺服器，可能與 DNS 或設定有關。",
        messageSecondary:
          `若需要緊急協助，請提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=1000%20Class%20Error%20|%20Ray%20ID:::RAY_ID::&body=%E8%AB%8B%E7%B0%A1%E8%BF%B0%E6%82%A8%E6%89%80%E8%A8%AA%E5%95%8F%E7%9A%84%E5%90%8D%E7%A8%B1%E6%88%96%E5%85%A7%E5%AE%B9%E3%80%82">支援工單</a>。`
      },
      cfAttack: {
        pageTitle: "快速安全檢查",
        categoryLabel: "受管理挑戰 / I'm Under Attack Mode",
        heading: "正在進行安全質詢",
        messageMain: "我們需要確認你是人類。",
        messageSecondary:
          `<p>請完成下方驗證以繼續瀏覽。</p><p class="mt-4">若驗證重複或失敗，請重新整理，或寄信到 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Managed%20Challenge%20Loop%20|%20Ray%20ID:::RAY_ID::&body=Ray%20ID:%20::RAY_ID::%0A%E5%95%8F%E9%A1%8C%E6%8F%8F%E8%BF%B0:%20">admin@zakk.au</a> 並附上此 Ray ID。</p>`,
        challengeHint: "驗證會自動載入，依提示完成後即可繼續。",
        statusNotice: "執行挑戰期間 Cloudflare 可能暫時回應 HTTP 403，通過驗證後便會恢復。"
      },
      cfRateLimit: {
        pageTitle: "429 | 速率限制",
        categoryLabel: "速率限制",
        heading: "請求過多",
        messageMain: "你在短時間內送出了過多請求。為確保服務穩定，我們暫時限制了此 IP 的流量。",
        messageSecondary:
          `若你認為這是錯誤，請稍後再試或提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Rate%20Limiting%20Block%20|%20Ray%20ID:::RAY_ID::&body=%E8%AB%8B%E8%AA%AA%E6%98%8E%E7%95%B6%E6%99%82%E7%9A%84%E6%93%8D%E4%BD%9C%E4%BB%A5%E4%BE%BF%E8%AA%BF%E6%95%B4%E3%80%82">支援工單</a>。`
      },
      cfChallengeBasic: {
        pageTitle: "安全檢查 | 基本挑戰",
        categoryLabel: "安全挑戰",
        heading: "請完成快速驗證",
        messageMain: "為了保護學生論壇，我們需要確認您不是機器人，請完成下方驗證。",
        messageSecondary:
          `若需協助，請提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Basic%20Challenge%20Assistance%20|%20Ray%20ID:::RAY_ID::&body=%E8%AB%8B%E7%B0%A1%E8%BF%B0%E8%A6%81%E8%A8%AA%E5%95%8F%E7%9A%84%E5%85%A7%E5%AE%B9%E3%80%82">支援工單</a>。`
      },
      cfCountryChallenge: {
        pageTitle: "安全檢查 | 國別挑戰",
        categoryLabel: "國別挑戰",
        heading: "需要額外驗證",
        messageMain: "來自您所在地區的流量需要額外確認，請完成挑戰後再繼續。",
        messageSecondary:
          `若覺得不合理，請提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=Country%20Challenge%20Review%20|%20Ray%20ID:::RAY_ID::&body=%E8%AB%8B%E7%B0%A1%E8%BF%B0%E8%A6%81%E8%A8%AA%E5%95%8F%E7%9A%84%E7%9B%AE%E6%A8%99%E3%80%82">支援工單</a>。`
      },
      cfWafChallenge: {
        pageTitle: "安全檢查 | WAF 挑戰",
        categoryLabel: "WAF 挑戰",
        heading: "請稍候完成驗證",
        messageMain: "在放行之前，請先完成 Cloudflare 的安全挑戰。",
        messageSecondary:
          `若仍卡關，請提交 <a class="${supportLinkClass}" href="mailto:admin@zakk.au?subject=WAF%20Challenge%20Help%20|%20Ray%20ID:::RAY_ID::&body=%E8%AB%8B%E7%B0%A1%E8%BF%B0%E8%A6%81%E8%A8%AA%E5%95%8F%E7%9A%84%E7%B6%B2%E5%9D%80%E5%8F%8A%E7%8F%BE%E8%B1%A1%E3%80%82">支援工單</a>。`
      },
      offline: {
        badge: "Always Online™",
        status: "快取副本",
        tagline: "這份快取頁面會在我們維修期間保留重要資訊。",
        detailsHeading: "目前狀態",
        detailStatus: "Always Online™ 正在提供快取副本，等待來源恢復。",
        detailLinks: "在正式站回復之前，部分連結或操作可能暫時無效。",
        detailContact:
          '需要立即協助？請來信 <a class="underline decoration-sky-300/60 underline-offset-4 hover:text-white" href="mailto:admin@zakk.au">admin@zakk.au</a>。',
        refresh: "重新整理",
        refreshNoscript: "(請先啟用 JavaScript。)",
        message:
          '<p><strong>error.zakk.au</strong> 的線上版本暫時無法使用。<a href="https://www.cloudflare.com/always-online/" target="_blank" role="link">Cloudflare 的 Always Online™</a> 正在提供來自 <a href="https://archive.org/web/" target="_blank" role="link">Internet Archive Wayback Machine</a> 的快取頁面，讓你不錯過重點資訊。</p><p>請使用下方按鈕再次檢查正式站，若想暫時關閉通知，可點擊右上角的 ×。</p>',
        refreshHint: "網站恢復後，我們會立即帶你回到正式站。"
      }
    }
  };

  const htmlLangMap = {
    en: "en",
    zhHans: "zh-Hans",
    zhHant: "zh-Hant"
  };

  function normalizeLocale(locale) {
    return (locale || "").toString().trim().toLowerCase();
  }

  function mapLocale(locale) {
    const normalized = normalizeLocale(locale);
    if (!normalized) {
      return null;
    }

    if (translations[normalized]) {
      return normalized;
    }

    if (normalized.startsWith("zh")) {
      if (
        normalized.includes("hant") ||
        normalized.endsWith("-tw") ||
        normalized.endsWith("-hk") ||
        normalized.endsWith("-mo")
      ) {
        return "zhHant";
      }
      return "zhHans";
    }

    if (normalized.startsWith("en")) {
      return "en";
    }

    return null;
  }

  function detectLanguage() {
    let candidate = null;

    if (typeof window !== "undefined" && window.location) {
      const params = new URLSearchParams(window.location.search);
      candidate = params.get("lang");
      const mappedFromQuery = mapLocale(candidate);
      if (mappedFromQuery && translations[mappedFromQuery]) {
        return mappedFromQuery;
      }
      if (candidate && translations[candidate]) {
        return candidate;
      }
    }

    if (typeof navigator !== "undefined") {
      const locales = Array.isArray(navigator.languages) && navigator.languages.length
        ? navigator.languages
        : [navigator.language || navigator.userLanguage || "en"];

      for (const locale of locales) {
        const mapped = mapLocale(locale);
        if (mapped && translations[mapped]) {
          return mapped;
        }
      }
    }

    return "en";
  }

  function getPageKey() {
    const body = document.body;
    if (body && body.dataset && body.dataset.page) {
      return body.dataset.page;
    }

    const doc = document.documentElement;
    if (doc && doc.dataset && doc.dataset.page) {
      return doc.dataset.page;
    }

    const fallbackNode = document.querySelector("[data-page]");
    if (fallbackNode && fallbackNode.dataset && fallbackNode.dataset.page) {
      return fallbackNode.dataset.page;
    }

    return "index";
  }

  function applyTranslations(language) {
    const langKey = translations[language] ? language : "en";
    const packs = translations[langKey];
    const pageKey = getPageKey();
    const pagePack = packs[pageKey] || {};
    const commonPack = packs.common || {};

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (!key) {
        return;
      }
      const value = Object.prototype.hasOwnProperty.call(pagePack, key)
        ? pagePack[key]
        : commonPack[key];

      if (value == null) {
        return;
      }

      const mode = element.getAttribute("data-i18n-mode") || "text";
      const attrTarget = element.getAttribute("data-i18n-attr");
      if (attrTarget) {
        element.setAttribute(attrTarget, value);
        return;
      }

      if (mode === "html") {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    const title = Object.prototype.hasOwnProperty.call(pagePack, "pageTitle")
      ? pagePack.pageTitle
      : commonPack.pageTitle;
    if (title) {
      document.title = title;
    }

    const htmlLang = htmlLangMap[langKey];
    if (htmlLang && document.documentElement) {
      document.documentElement.setAttribute("lang", htmlLang);
    }
  }

  const themeStorageKey = "cfThemePreference";
  const systemThemeQueries = ["(prefers-color-scheme: dark)", "(prefers-color-scheme: light)"];
  let followSystemPreference = false;
  let systemThemeWatcherAttached = false;

  function applyTheme(theme) {
    if (typeof document === "undefined") {
      return;
    }

    const normalized = theme === "dark" ? "dark" : "light";
    const root = document.documentElement;
    if (!root) {
      return;
    }

    root.setAttribute("data-theme", normalized);
    if (root.style) {
      root.style.colorScheme = normalized;
    }

    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.setAttribute("data-theme-state", normalized);
    }
  }

  function detectSystemTheme() {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return null;
    }

    try {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
      }
    } catch (error) {
      // Ignore media query issues
    }

    return null;
  }

  function attachSystemThemeWatcher() {
    if (systemThemeWatcherAttached || typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const handler = function () {
      if (!followSystemPreference) {
        return;
      }

      const next = detectSystemTheme() || "dark";
      applyTheme(next);
    };

    for (let i = 0; i < systemThemeQueries.length; i += 1) {
      try {
        const mql = window.matchMedia(systemThemeQueries[i]);
        if (!mql) {
          continue;
        }

        if (typeof mql.addEventListener === "function") {
          mql.addEventListener("change", handler);
        } else if (typeof mql.addListener === "function") {
          mql.addListener(handler);
        }
      } catch (error) {
        // Ignore listener registration errors
      }
    }

    systemThemeWatcherAttached = true;
  }

  function getStoredTheme() {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      const stored = window.localStorage.getItem(themeStorageKey);
      if (stored === "light" || stored === "dark") {
        return stored;
      }
    } catch (error) {
      // Ignore storage access issues
    }

    return null;
  }

  function storeTheme(theme) {
    if (typeof window === "undefined") {
      return;
    }

    followSystemPreference = false;

    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
      // Ignore storage access issues
    }
  }

  function clearStoredTheme() {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.removeItem(themeStorageKey);
    } catch (error) {
      // Ignore storage access issues
    }
  }

  function applyThemePreference() {
    if (typeof document === "undefined") {
      return;
    }

    const stored = getStoredTheme();
    followSystemPreference = !stored;

    if (stored) {
      applyTheme(stored);
      return;
    }

    const systemTheme = detectSystemTheme() || "dark";
    applyTheme(systemTheme);
    attachSystemThemeWatcher();
  }

  function setupThemeToggle(language) {
    if (typeof document === "undefined") {
      return;
    }

    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) {
      return;
    }

    const updateLabel = () => {
      const packs = translations[translations[language] ? language : "en"];
      const commonPack = packs.common || {};
      const label = commonPack.themeToggleLabel || "Toggle color theme";
      toggle.setAttribute("aria-label", label);
    };

    updateLabel();

    toggle.addEventListener("click", (event) => {
      if (event && (event.altKey || event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        clearStoredTheme();
        followSystemPreference = true;
        const systemTheme = detectSystemTheme() || "dark";
        applyTheme(systemTheme);
        attachSystemThemeWatcher();
        return;
      }

      const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      storeTheme(next);
      applyTheme(next);
    });

    const initial = getStoredTheme();
    if (initial) {
      toggle.setAttribute("data-theme-state", initial);
    } else {
      toggle.setAttribute(
        "data-theme-state",
        document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light"
      );
      attachSystemThemeWatcher();
    }
  }

  function init() {
    const language = detectLanguage();
    applyTranslations(language);
    applyThemePreference();
    setupThemeToggle(language);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
