const internalMapping = {
  "/gyan/": "http://blog.nivesh.com/",

  "/our-products/mutual-funds/hybrid/":
    "https://www.nivesh.com/HybridMutualFund",
  "/our-products/mutual-funds/hybrid/dynamic-asset-allocation/":
    "https://www.nivesh.com/DynamicAssetAllocationfunds",
  "/our-products/mutual-funds/hybrid/equity-savings/":
    "https://www.nivesh.com/EquitySavingsMutualFund",
  "/our-products/mutual-funds/hybrid/arbitrage-fund/":
    "https://www.nivesh.com/ArbitrageFund",
  "/our-products/mutual-funds/hybrid/aggressive-hybrid-fund/":
    "https://www.nivesh.com/AgressivehybridFunds",
  "/our-products/mutual-funds/hybrid/balanced-hybrid-fund/":
    "https://www.nivesh.com/BalancedHybridFunds",
  "/our-products/mutual-funds/hybrid/multi-asset-allocation/":
    "https://www.nivesh.com/MultiAssetAllocation",
  "/our-products/mutual-funds/hybrid/conservative-hybrid-fund/":
    "https://www.nivesh.com/ConservativeHybridFunds",
  "/our-products/mutual-funds/debt/": "https://www.nivesh.com/DebtMutualFunds",
  "/our-products/mutual-funds/debt/medium-duration-fund/":
    "https://www.nivesh.com/MediumDurationFund",
  "/our-products/mutual-funds/debt/overnight-fund/":
    "https://www.nivesh.com/overnightmutualfunds",
  "/our-products/mutual-funds/debt/low-duration-fund/":
    "https://www.nivesh.com/lowdurationfunds",
  "/our-products/mutual-funds/debt/dynamic-bond/":
    "https://www.nivesh.com/dynamicbond",
  "/our-products/mutual-funds/debt/gilt-fund-with-10-year-constant-duration/":
    "https://www.nivesh.com/giltfund10yrs",
  "/our-products/mutual-funds/debt/long-duration-fund/":
    "https://www.nivesh.com/LongDurationFund",
  "/our-products/mutual-funds/debt/short-duration-fund/":
    "https://www.nivesh.com/ShortDurationFund",
  "/our-products/mutual-funds/debt/money-market-fund/":
    "https://www.nivesh.com/MoneyMarketFund",
  "/our-products/mutual-funds/debt/gilt-fund/":
    "https://www.nivesh.com/GiltFund",
  "/our-products/mutual-funds/debt/corporate-bond-fund/":
    "https://www.nivesh.com/CorporateBondFund",
  "/our-products/mutual-funds/debt/floater-fund/":
    "https://www.nivesh.com/FloaterMutualFund",
  "/our-products/mutual-funds/debt/liquid-fund/":
    "https://www.nivesh.com/LiquidMutualFund",
  "/our-products/mutual-funds/debt/medium-to-long-duration-fund/":
    "https://www.nivesh.com/MediumToLongDurationFund",
  "/our-products/mutual-funds/debt/ultra-short-duration-fund/":
    "https://www.nivesh.com/UltraShortTermFund",
  "/our-products/mutual-funds/debt/banking-and-psu-fund/":
    "https://www.nivesh.com/BankandPSUDebtFund",
  "/our-products/mutual-funds/debt/credit-risk-fund/":
    "https://www.nivesh.com/CreditRiskFund",
  "/our-products/mutual-funds/equity/": "https://www.nivesh.com/Equity",
  "/our-products/mutual-funds/equity/focused-fund/":
    "https://www.nivesh.com/focusedfund",
  "/our-products/mutual-funds/equity/flexi-cap/":
    "https://www.nivesh.com/flexicapfunds",
  "/our-products/mutual-funds/equity/mid-cap-fund/":
    "https://www.nivesh.com/midcapfunds",
  "/our-products/mutual-funds/equity/multi-cap-fund/":
    "https://www.nivesh.com/multicapfunds",
  "/our-products/mutual-funds/equity/large-cap-fund/":
    "https://www.nivesh.com/largecapfunds",
  "/our-products/mutual-funds/equity/small-cap-fund/":
    "https://www.nivesh.com/smallcapfunds",
  "/our-products/mutual-funds/equity/large-mid-cap-funds/":
    "https://www.nivesh.com/largeandmidcapfunds",
  "/our-products/mutual-funds/equity/sectoral-thematic/":
    "https://www.nivesh.com/sectoralthermatic",
  "/our-products/mutual-funds/equity/value-fund/":
    "https://www.nivesh.com/valuefund",
  "/our-products/mutual-funds/equity/elss/": "https://www.nivesh.com/elssfunds",
  "/our-products/mutual-funds/equity/dividend-yield-fund/":
    "https://www.nivesh.com/dividendyieldfunds",
  "/our-products/mutual-funds/equity/contra-fund/":
    "https://www.nivesh.com/ContraFund",
  "/our-products/mutual-funds/solution-oriented/": "https://www.nivesh.com/",
  "/our-products/mutual-funds/solution-oriented/retirement-fund/":
    "https://www.nivesh.com/retirementfund",
  "/our-products/mutual-funds/solution-oriented/childrens-fund/":
    "https://www.nivesh.com/childrenFund",
  "/our-products/mutual-funds/other/": "https://www.nivesh.com/",
  "/our-products/mutual-funds/other/index-funds/":
    "https://www.nivesh.com/indexfund",
  "/our-products/mutual-funds/other/fofs/": "https://www.nivesh.com/FoFs",
  "/our-products/bond/": "https://www.nivesh.com/bond/",
  "/our-products/bond/rbi-floating-rate-saving-bonds/":
    "https://www.nivesh.com/bond/rbi-floating-rate-saving-bonds/",
  "/our-products/capital-gain-bond/":
    "https://www.nivesh.com/capital-gain-bond/",
  "/our-products/alternative-investment-fund/":
    "https://www.nivesh.com/alternative-investment-fund/",
  "/our-products/national-pension-scheme/":
    "https://www.nivesh.com/national-pension-scheme/",
  "/our-products/fixed-deposit/": "https://www.nivesh.com/fixed-deposit/",
  "/our-products/fixed-deposit/bajaj-finance-ltd/":
    "https://www.nivesh.com/fixed-deposit/bajaj-finance-ltd/",
  "/our-products/fixed-deposit/shriram-transport-finance-company-ltd/":
    "https://www.nivesh.com/fixed-deposit/shriram-transport-finance-company-ltd/",
  "/our-products/fixed-deposit/mahindra-finance-limited/":
    "https://www.nivesh.com/fixed-deposit/mahindra-finance-limited/",
  "/our-products/fixed-deposit/hdfc-ltd/":
    "https://www.nivesh.com/fixed-deposit/hdfc-ltd/",
  "/our-products/fixed-deposit/pnb-housing-finance-ltd/":
    "https://www.nivesh.com/fixed-deposit/pnb-housing-finance-ltd/",
  "/our-products/fixed-deposit/icici-home-finance-co-ltd/":
    "https://www.nivesh.com/fixed-deposit/icici-home-finance-co-ltd/",
  "/our-products/portfolio-management-service/": "https://www.nivesh.com/pms/",
  "/our-products/portfolio-management-service/motilal-oswal-group/":
    "https://www.nivesh.com/pms/motilal-oswal-group/",
  "/our-products/portfolio-management-service/ask-group/":
    "https://www.nivesh.com/pms/ask-group/",
  "/our-products/portfolio-management-service/invesco-asset-management-india-pvt-ltd/":
    "https://www.nivesh.com/pms/invesco-asset-management",
  "/our-products/portfolio-management-service/icici-prudential-portfolio-management-services/":
    "https://www.nivesh.com/pms/icici-prudential",
  "/our-products/portfolio-management-service/tata-asset-management-company/":
    "https://www.nivesh.com/pms/tata-asset-management",
  "/our-products/peer-to-peer-lending/":
    "https://www.nivesh.com/peer-to-peer-lending/",
  "/our-products/peer-to-peer-lending/liquiloans/":
    "https://www.nivesh.com/peer-to-peer-lending/liquiloans/",
  "/our-products/peer-to-peer-lending/fairassets-technologies-india-pvt-ltd/":
    "https://www.nivesh.com/peer-to-peer-lending/faircent",

  "/partners/": "https://www.nivesh.com/partners/",
  "/partners/become-mutual-fund-distributors/":
    "https://www.nivesh.com/partners/become-mutual-fund-distributors/",
  "/partners/all-about-amfi-arn-code/":
    "https://www.nivesh.com/partners/all-about-amfi-arn-code/",
  "/partners/grow-mutual-fund-distribution-business/":
    "https://www.nivesh.com/partners/become-mutual-fund-distributors/",

  "/monthy-sip/": "https://www.nivesh.com/calculator/sip",
  "/lumpsum-investment/": "https://www.nivesh.com/calculator/lumpsum",
  "/about/": "https://www.nivesh.com/about-us",
  "/testimonials/": "https://www.nivesh.com/testimonials/",
  "/nism-certifications-exam/":
    "https://www.nivesh.com/nism-certification-exam",
  "/privacy-policy/": "https://www.nivesh.com/privacy-policy/",
  "/sitemap/": "https://www.nivesh.com/",
  "/terms-and-conditions/": "https://www.nivesh.com/terms-and-conditions/",
  "/gyan/all-you-should-know-about-liquid-funds/":
    "https://blog.nivesh.com/mf/debt/all-you-should-know-about-liquid-funds/",
  "/gyan/fmps-a-perfect-choice-for-investors-looking-for-steady-returns/":
    "https://blog.nivesh.com/",
  "/gyan/take-baby-steps-towards-investment-with-ultra-short-term-funds/":
    "https://blog.nivesh.com/mf/debt/what-are-ultra-short-term-funds",
  "/gyan/arbitrage-funds-perfect-to-make-most-of-the-market-volatility/":
    "https://blog.nivesh.com/",
  "/gyan/mutual-fund-kyc/": "https://blog.nivesh.com/mf/mutual-fund-kyc/",
  "/gyan/journey-road-or-life/": "https://blog.nivesh.com/",
  "/gyan/all-about-dynamic-equity-funds/": "https://blog.nivesh.com/",
  "/gyan/systematic-transfer-plan-heres-all-you-would-like-to-know-along-with-the-tax-implications/":
    "https://blog.nivesh.com/",
  "/gyan/all-about-dynamic-asset-allocation-funds-and-their-tax-implications/":
    "https://blog.nivesh.com/mf/hybrid",
  "/gyan/corporate-bond-funds-invest-for-regular-and-better-returns-than-a-fixed-deposit/":
    "https://blog.nivesh.com/mf/debt/what-is-corporate-bond-funds",
  "/gyan/what-are-hybrid-funds-types-of-hybrid-funds/":
    "https://blog.nivesh.com/",
  "/gyan/should-i-keep-my-savings-in-the-bank-or-invest-in-mutual-funds/":
    "https://blog.nivesh.com/mf/should-i-keep-my-savings-in-the-bank-or-invest-in-mutual-funds/",
  "/gyan/debt-mutual-funds-a-perfect-choice-for-conservative-investors/":
    "https://blog.nivesh.com/mf/debt/what-is-a-debt-funds",
  "/gyan/5-important-questions-answered-for-a-first-time-mutual-funds-investor/":
    "https://blog.nivesh.com/mf/5-important-questions-answered-for-a-first-time-mutual-funds-investor/",
  "/gyan/equity-savings-funds/": "https://blog.nivesh.com/mf/equity/",
  "/gyan/are-you-retirement-ready-invest-right-today-for-a-safer-tomorrow/":
    "https://blog.nivesh.com/mf/are-you-retirement-ready-invest-right-today-for-a-safer-tomorrow/",
  "/gyan/all-about-mutual-funds-with-insurance-cover/":
    "https://blog.nivesh.com/mf/all-about-mutual-funds-with-insurance-cover/",
  "/gyan/heres-all-you-should-know-about-systematic-investment-plan/":
    "https://blog.nivesh.com/mf/heres-all-you-should-know-about-systematic-investment-plan/",
};

module.exports = { internalMapping };
