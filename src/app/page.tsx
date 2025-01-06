import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-4 flex items-center justify-center">
      <div className="card max-w-lg w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-2xl font-bold text-center justify-center">
            CIPLE Exam Notification Service
          </h1>
          <p className="text-center">
            Get instant notifications when CIPLE exam spots become available
          </p>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">How to Subscribe:</h2>
              <ol className="list-decimal list-inside space-y-4">
                <li className="text-gray-700">
                  Send 5€ using this link:
                  <a
                    href="https://wise.com/pay/me/tonyo10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary block mt-2 text-lg font-medium text-center"
                  >
                    Pay with Wise
                  </a>
                </li>
                <li className="text-gray-700">
                  Send your payment confirmation to our Telegram bot by scanning
                  the QR code or clicking the link below:
                  <div className="mt-4 flex justify-center">
                    <Image
                      src="/qr-code.jpg"
                      alt="Telegram QR Code"
                      className="w-48 h-auto rounded-lg shadow-md"
                      width={192}
                      height={192}
                    />
                  </div>
                  <a
                    href="https://t.me/CAPLE_notification_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary block mt-4 text-center"
                  >
                    @CAPLE_notification_bot
                  </a>
                </li>
              </ol>
            </div>

            <div className="alert bg-blue-50">
              <p className="text-sm text-gray-600 text-center">
                Once your payment is confirmed, you&apos;ll start receiving
                notifications whenever Portuguese CIPLE exam registration spots
                become available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
